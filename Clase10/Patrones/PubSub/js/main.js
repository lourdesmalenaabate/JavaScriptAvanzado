console.warn(document.querySelector('title').textContent)

/* ----------------------------------------------- */
/*                 Objeto Mailer                   */
/* ----------------------------------------------- */
/* var Mailer = function() {}
Mailer.prototype = {
    enviarMailDeCompra : function(mail) {
        console.log('enviando email ...')
        setTimeout(() => {
            console.log('email enviado a ' + mail)
        },2000)
    }
} */

/* ----------------------------------------------- */
/*                 Objeto Orden                    */
/* ----------------------------------------------- */
/* var Orden = function(mail) {
    this.mail = mail 
}
Orden.prototype = {
    enviar : function() {
        console.log('Orden de compra almacenada')
        this.enviarMail(this.mail)
    },
    enviarMail : function(mail) {
        //------------------------------------------------------
        // Fuerte acoplamiento entre los objetos orden y mailer
        //------------------------------------------------------
        var mailer = new Mailer()
        mailer.enviarMailDeCompra(mail)
    }
} */

/* ----------------------------------------------- */
/*                     Acción                      */
/* ----------------------------------------------- */
/* var orden = new Orden('juan@gmail.com')
orden.enviar() */


/* ------------------------------------------------------------------------- */
/*  Bus de comunicación entre objetos (implementación del patrón Pub / Sub)  */
/* ------------------------------------------------------------------------- */
var BusComunicacion = {
    acciones : {},
    suscribir : function(servicio, cb) {
        if(!this.acciones[servicio]) this.acciones[servicio] = []
        this.acciones[servicio].push(cb)
        console.warn(`Servicio: ${servicio} CON UNA NUEVA SUSCRIPCIÓN`)
    },
    publicar: function(servicio, datos) {
        if(!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.warn(`En este servicio: ${servicio} NO HAY SUSCRIPTORES (publicar)`)
            return
        }
        this.acciones[servicio].forEach(cb => {
            if(cb) cb(datos || {})
        });
    },
    desuscribir : function(servicio) {
        if(!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.warn(`En este servicio: ${servicio} NO HAY SUSCRIPTORES (desuscribir)`)
            return
        }
        this.acciones[servicio] = []
        console.warn(`Servicio: ${servicio} DESUSCRIPTO`)
    }
}

/* ---------------------------------------------------------------------------------------- */
/* Utilización del patrón Pub Sub (BusComunicación) para realizar un test de funcionamiento */
/* ---------------------------------------------------------------------------------------- */
/*
// Me suscribo al servicio de diarios del domingo (suscriptor: Sub)
BusComunicacion.suscribir('Diario del Domingo', diario => console.log('Llegó el diario ' + diario))
BusComunicacion.suscribir('Diario del Domingo', diario => document.write('Llegó el diario ' + diario + '<br>'))

// El diariero sale a repartir el diario (publicador: Pub)
var refTimer = setInterval(() => {
    BusComunicacion.publicar('Diario del Domingo', 'La Nación')
}, 7000);

// Luego de varias entregas, realizo la desuscripción
setTimeout(() => {
    BusComunicacion.desuscribir('Diario del Domingo')
    clearInterval(refTimer)
}, 22000);
*/

/* ------------------------------------------------------------------------------------------- */
/* Utilización del patrón Pub Sub (BusComunicación) para desacoplar los objetos orden y mailer */
/* ------------------------------------------------------------------------------------------- */

/* ----------------------------------------------- */
/*                 Objeto Mailer                   */
/* ----------------------------------------------- */
var Mailer = function() {
    BusComunicacion.suscribir('orden', mail => this.enviarMailDeCompra(mail))
}
Mailer.prototype = {
    enviarMailDeCompra : function(mail) {
        console.log('enviando email ...')
        setTimeout(() => {
            console.log('email enviado a ' + mail)
        },2000)
    }
}

/* ----------------------------------------------- */
/*                 Objeto Orden                    */
/* ----------------------------------------------- */
var Orden = function(mail) {
    this.mail = mail 
}
Orden.prototype = {
    enviar : function() {
        console.log('Orden de compra almacenada')
        this.enviarMail(this.mail)
    },
    enviarMail : function(mail) {
        BusComunicacion.publicar('orden', mail)
        /*
        //------------------------------------------------------
        // Fuerte acoplamiento entre los objetos orden y mailer
        //------------------------------------------------------
        var mailer = new Mailer()
        mailer.enviarMailDeCompra(mail)
        */
    }
}

/* ----------------------------------------------- */
/*                     Acción                      */
/* ----------------------------------------------- */
var mailer = new Mailer()
var orden = new Orden('juan@gmail.com')
orden.enviar()
