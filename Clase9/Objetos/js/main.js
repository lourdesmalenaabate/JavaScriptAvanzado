console.log(document.querySelector('title').innerText)

/* -------------------------------------------------------- */
/*        Objetos en Javascript : forma para crearlos       */
/* -------------------------------------------------------- */
// 1) Forma literal (JS5)
// 2) Utilizando el método create de Object (JS5)
// 3) Utilizando funciones constructoras (JS5)
//      a) Factory (fábrica de objetos)
//      b) Operador new
// 4) Utilizando la función constructora class (new) (ES6) 
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
console.log('\n/* 1) Forma Literal */')

let a = { nombre: 'Juan' }
console.log(a)

console.log(a.nombre)
console.log(a.hasOwnProperty('nombre'))
console.log(a.hasOwnProperty('edad'))


/* -------------------------------------------------------- */
console.log('\n/* 2) Función create de Object */')

let prototipo1 = {
    saludo : function() {
        console.log('Hola soy el prototipo 1')
    }
}

/* let prototipo2 = {
    saludo : function() {
        console.log('Hola soy el prototipo 2')
    }
} */

//let prototipo2 = Object.create(null)
let prototipo2 = Object.create(Object.prototype)
prototipo2.saludo = function() {
    console.log('Hola soy el prototipo 2')
}
console.log('prototipo2', prototipo2)

//let b = Object.create(null)
//let b = Object.create(Object.prototype)
let b = Object.create(prototipo1)
console.log(b)

let c = Object.create(prototipo1)
console.log(c)

let d = Object.create(prototipo2)
console.log(d)

console.log(prototipo1.isPrototypeOf(b))
console.log(prototipo1.isPrototypeOf(c))
console.log(prototipo1.isPrototypeOf(d))

console.log(prototipo2.isPrototypeOf(b))
console.log(prototipo2.isPrototypeOf(c))
console.log(prototipo2.isPrototypeOf(d))

/* -------------------------------------------------------- */
console.log('\n/* Propiedades Avanzadas: Función create de Object */')

console.log(`
/* ----------------------------------- */
/*           Objeto dinámico           */
/* ----------------------------------- */
`)

const dinamico = Object.create(Object.prototype)
dinamico.x = 1
dinamico.y = 2
//const dinamico = { x:1, y:2 }

console.log(dinamico)

//console.log(dinamico.x)          // Leo propiedad
//dinamico.x = 11                // Escribo propiedad
//delete dinamico.x              // borro propiedad
for(let key in dinamico) {       // Itero el objeto (recorro sus propiedades)
    console.log(key)
}

console.log(dinamico)


console.log(`
/* ----------------------------------- */
/*           Objeto estático           */
/* ----------------------------------- */
`)

const estatico = Object.create(Object.prototype, {
    x : {
        value : 1,
        writable : true,
        configurable: true,
        enumerable: true
    },
    y : {
        value : 2,
        enumerable: false
    }
})

console.log(estatico)

//console.log(estatico.x)          // Leo propiedad
//estatico.x = 11                // Escribo propiedad
//delete estatico.x              // borro propiedad
for(let key in estatico) {       // Itero el objeto (recorro sus propiedades)
    console.log(key)
}

console.log(estatico)


/* -------------------------------------------------------- */
console.log('\n/* 3) Funciones constructoras */')

console.log('\n/* 3.1) Análisis de una función en Javascript */')


/* -------------------------------------------------------- */
console.log('\n/* 3.1.a) Una función en JS es un Objeto */')

function foo() {
    console.log('Soy foo')
}

foo()

foo.x = true
console.log(foo.x)

console.log(foo)
console.dir(foo)


/* -------------------------------------------------------- */
console.log('\n/* 3.1.b) Una función en JS es variádica */')

/* function suma(a=0,b=0) {
    console.log(a,b)
    return a + b
} */

function suma(a,b) {
    a = a || 0
    b = b || 0      // short circuit operator
    console.log(a,b)
    return a + b
}

console.log(suma(5,6))


/* -------------------------------------------------------- */
console.log('\n/* 3.1.c) Una función en JS tiene ámbito o scope */')

var global = 'global'

function foo2(argumento2) {
    var local2 = 'local2'
    console.log(global, local2, argumento2)//, argumento3)// local3)
}

function foo3(argumento3) {
    var local3 = 'local3'
    console.log(global, local3, argumento3)//, argumento2)// local2)
}

foo2('argumento2')
foo3('argumento3')

console.log(global)
//console.log(local2)
//console.log(local3)
//console.log(argumento2)
//console.log(argumento3)


/* -------------------------------------------------------- */
console.log('\n/* 3.1.d) Una función en JS tiene contexto (this) */')

function foo4() {
    console.log(this)
}

foo4()

var nombre = 'Pedro'
var persona = {
    nombre : 'Juan',
    saludo : function() {
        //console.log(this)
        console.log('Hola soy ' + this.nombre)
    }
}

persona.saludo()

// PROBLEMA: pierdo el this (la referencia) al objeto persona
console.warn('Forma normal')
const saludoExt = persona.saludo
saludoExt()

//SOLUCIÓN CON apply, call, bind
console.warn('Forma apply')
saludoExt.apply(persona)

console.warn('Forma call')
saludoExt.call(persona)

console.warn('Forma bind')
saludoExt.bind(persona)()


/* -------------------------------------------------------- */
console.log('\n/* 3.1.e) Una función en JS tiene closure (clausuras) */')

function externa(x) {
    //console.log(x)
    //return x
    let z = 5
    return function interna(y) {
        console.log(y+x+z)
    }
}

let resultado = externa(50)
//console.log(x)
console.log(resultado)

resultado(10)

console.dir(resultado)

/* -------------------------------------------------------- */
console.log('\n/* 3.1.f) Formas de ejecutar una función en JS */')

var x = 11
function ctx(a,b) {
    console.log(this, this.x, a, b)
}

console.dir(ctx)

ctx(5,6)                    // forma normal de ejecución
ctx.apply({x:1},[5,6])      // forma de ejecución usando el método apply
ctx.call({x:1},5,6)         // forma de ejecución usando el método call
ctx.bind({x:1})(5,6)        // forma de ejecución usando el método bind


// ----------------------------------------------------------------------
//  Funcionamiento del this en arrow function (this contextual -> fijo)
// ----------------------------------------------------------------------
function cliente() {
    console.log('this cliente',this)
    this.edad = 32
    //var that = this

    return {
        //edad : 45,
        //getEdad : function() {
        getEdad : () => {
            console.log('this getEdad', this)
            return this.edad
            //return that.edad
        }
    }
}

var cl = cliente()
console.log(cl.getEdad())

var getEdadAux = cl.getEdad
console.log(getEdadAux())


// ----------------------------------------------------------------
console.log('\n/* POO, OOP : Aplicaciones de funciones constructoras */')

//NO FUNCIONA: porque juan y ana apuntan al mismo objeto, no son independientes (copia es por referencia)
/* var alumno = {
    nombre : null,
    edad: null
}

var juan = alumno
var ana = alumno */

//SOLUCIÓN -> usar funciones

/* -------------------------------------------------------- */
console.log('\n/* 3.a) funciones constructoras: Factory ó fábrica de objetos */')

function alumno(nombre,edad) {
    return {
        nombre, // es igual a -> nombre: nombre,
        edad    // es igual a -> edad: edad
    }
}

var juan = alumno('Juan',23)
var ana = alumno('Ana',21)

console.log(juan)
console.log(ana)


/* -------------------------------------------------------- */
console.log('\n/* 3.b) funciones constructoras: Operador new */')

function AlumnoJS5(nombre,edad) {
    //console.log(this)
    this.nombre = nombre
    this.edad = edad
}
console.dir(AlumnoJS5)

var marioJS5 = new AlumnoJS5('Mario',32)
var ceciliaJS5 = new AlumnoJS5('Cecilia',35)

console.log(marioJS5)
console.log(ceciliaJS5)

//AlumnoJS5()    // --> Se puede hacer, pero no se debe

/* ----------------------------------------------------------------------------------------------------- */
/*                  FUNCIONAMIENTO DEL OPERADOR NEW USADO EN FUNCIONES CONSTRUCTORAS                     */
/* ----------------------------------------------------------------------------------------------------- */
// 1) Crea un objeto literal vacío -> p = {}
// 2) Ejecuta la función constructora que tiene a su derecha en el contexto del objeto creado en el punto 1
//    -> Alumno.call(p, ... , ... , ...) -> el this dentro de la función constructora apunta a ese p
// 3) Retorna a su izquierda el objeto actualizado por la función constructora, para ser almacenado
//   -> var mario <- p <- Alumno.call(p, ... , ... , ...)
/* ----------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------- */
console.log('\n/* 4) función class de ES6 */')

class AlumnoES6 {
    constructor(nombre,edad) {
        //console.log(this)
        this.nombre = nombre
        this.edad = edad
    }
}
console.dir(AlumnoES6)

var marioES6 = new AlumnoES6('Mario',32)
var ceciliaES6 = new AlumnoES6('Cecilia',35)

console.log(marioES6)
console.log(ceciliaES6)

//AlumnoES6()    // --> NO se puede hacer


/* -------------------------------------------------------- */
console.log('\n/* Propiedad "prototype" de un función constructora (En JS5 y ES6) */')
console.log('\n/* Propiedades: instancia, prototipo, estáticas */')

//-------------------------------------------------------------------------
console.log('\n/* ------ Utilizando JS5 ------ */')

// funciona porque las funciones son elevadas antes de su ejecución
// -> https://developer.mozilla.org/es/docs/Glossary/Hoisting
var mariaJS5 = new PersonaJS5('Maria',28)
console.log(mariaJS5)

function PersonaJS5(nombre, edad) {
    // ***** Propiedades instancia *****
    this.nombre = nombre
    this.edad = edad
    PersonaJS5.contador++
}
console.dir(PersonaJS5)

// ***** Propiedad prototipo *****
PersonaJS5.prototype.saludo = function() {
    console.log('Hola!')
}

// ***** Propiedad estática *****
PersonaJS5.contador = 0

console.warn('Contador de instancias ->', PersonaJS5.contador)

var diegoJS5 = new PersonaJS5('Diego',26)
console.log(diegoJS5)
console.warn('Contador de instancias ->', PersonaJS5.contador)

var aliciaJS5 = new PersonaJS5('Alicia',24)
console.log(aliciaJS5)
console.warn('Contador de instancias ->', PersonaJS5.contador)

var pedroJS5 = new PersonaJS5('Pedro',27)
console.log(pedroJS5)
console.warn('Contador de instancias ->', PersonaJS5.contador)

//-------------------------------------------------------------------------
console.log('\n/* ------ Utilizando ES6 ------ */')

// NO funciona porque la función class NO es elevada
//var mariaES6 = new PersonaES6('Maria',28)
//console.log(mariaES6)

class PersonaES6 {

    // ***** Propiedad estática *****
    static contador = 0

    constructor(nombre, edad) {
        // ***** Propiedades instancia *****
        this.nombre = nombre
        this.edad = edad
        PersonaES6.contador++
    }

    // ***** Propiedad prototipo *****
    saludo() {
        console.log('Hola!')
    }

}
console.dir(PersonaES6)

console.warn('Contador de instancias ->', PersonaES6.contador)

var diegoES6 = new PersonaES6('Diego',26)
console.log(diegoES6)
console.warn('Contador de instancias ->', PersonaES6.contador)

var aliciaES6 = new PersonaES6('Alicia',24)
console.log(aliciaES6)
console.warn('Contador de instancias ->', PersonaES6.contador)

var pedroES6 = new PersonaES6('Pedro',27)
console.log(pedroES6)
console.warn('Contador de instancias ->', PersonaES6.contador)




