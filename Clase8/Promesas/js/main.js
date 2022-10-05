console.log(document.querySelector('title').textContent)

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

/* --------------------------------------------------- */
/*             Métodos: resolve, reject                */
/* --------------------------------------------------- */
//Promise.reject('algo salió mal')
/* Promise.resolve(7)
.then(rta => rta * 2)
.then(rta => {
    if(rta != 12) throw rta
    return rta
})
.then(rta => console.log('ok:',rta))
.catch(err => console.error('error:',err)) */

/* --------------------------------------------------- */
/*                Métodos: race, all                   */
/* --------------------------------------------------- */
const retardo = (ms,mensaje) => new Promise((resolve, reject) => {
    let tipo = typeof ms

    if(tipo == 'number') {
        setTimeout(() => {
            resolve(mensaje)
        },ms)
    }
    else {
        let error = {
            title : 'Error en tipo de entrada ms (debe ser un número)',
            tipo,   // es igual a -> tipo : tipo
            mensaje,
            ms
        }
        reject(error)
    }
})

const retardo2 = ms => new Promise(resolve => setTimeout(resolve,ms))

const prtTime = (mensaje,cl) => cl(mensaje, new Date().toLocaleString())


/* ------------------ Test de la Promesa retardo -------------------- */
/* prtTime('Inicio Delay', console.warn)
retardo(2000, 'Retardo 2000mS de prueba')
.then(rta => {
    console.log(rta)
    prtTime('Fin Delay', console.warn)
})
.catch(console.error)// es igual a > .catch(error => console.error(error)) */

/* ------------------ Test de la Promesa retardo 2------------------- */
/* prtTime('Inicio Delay 2', console.warn)
retardo2(4000)
.then( () => prtTime('Fin Delay 2', console.warn) ) */


/* -------------------- RACE ------------------------ */
/* prtTime('Inicio Carrera', console.warn)
Promise.race([
    retardo(14000, 'Retardo 14000mS de prueba'),
    retardo(12000, 'Retardo 12000mS de prueba'),
    retardo(16000, 'Retardo 16000mS de prueba')
])
.then( rta => {
    console.log(rta)
    prtTime('Fin Carrera', console.warn)
})
.catch(error => console.error('Error en carrera', error)) */


/* -------------------- ALL ------------------------ */
/* prtTime('Inicio Cumplimiento total', console.warn)
Promise.all([
    retardo(14000, 'Retardo 14000mS de prueba'),
    retardo(2000, 'Retardo 2000mS de prueba'),
    retardo(16000, 'Retardo 16000mS de prueba')
])
.then( rta => {
    console.log(rta)
    prtTime('Fin Cumplimiento total', console.warn)
})
.catch(error => console.error('Error en Cumplimiento total', error)) */


async function realizarRetardosAnidados() {

    prtTime('inicio retardo anidado', console.warn)

    try {
        for(let i=0; i<3; i++) {
            let rta = await retardo(2000, 'Retardo '+ (i+1))
            prtTime(rta, console.warn)
        }

        /*
        let rta = await retardo(2000, 'Retardo 1')
        prtTime(rta, console.warn)
        
        rta = await retardo(2000, 'Retardo 2')
        prtTime(rta, console.warn)
        
        rta = await retardo(2000, 'Retardo 3')
        prtTime(rta, console.warn)
        */
    }
    catch(error) {
        console.error('Error en realizarRetardosAnidados', error)
    }
}

realizarRetardosAnidados()