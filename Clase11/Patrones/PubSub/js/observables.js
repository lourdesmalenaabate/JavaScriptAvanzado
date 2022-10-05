console.warn('\nObservables RxJS (Implementación del Patrón Pub/Sub)')
//https://rxjs.dev/
//https://rxjs.dev/guide/observable
//https://cdnjs.com/libraries/rxjs


console.log('\n ************** Productores y consumidores de datos **************** ')


/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
console.log(`
/* ---------------------------------------------------- */
/*        Function Pull (Pasiva) - Single Data          */
/* ---------------------------------------------------- */
`)
/* Productor de datos */
var contadorFunction = 0
function contarFunction() {
    return contadorFunction++
}

/* consumidor de datos */
console.log( contarFunction() )
console.log( contarFunction() )
console.log( contarFunction() )
console.log( contarFunction() )


/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
console.log(`
/* ---------------------------------------------------- */
/*       Iterator Pull (Pasivo) - Múltiple Data         */
/* ---------------------------------------------------- */
`)

/* Productor de datos */
var contadorIterator = 0
function *fgContarIterator() {
    yield contadorIterator++
    yield contadorIterator++
    yield contadorIterator++
    return contadorIterator++
}

/* consumidor de datos */
const contarIterator = fgContarIterator()
console.log(contarIterator.next().value)
console.log(contarIterator.next().value)
console.log(contarIterator.next().value)
console.log(contarIterator.next().value)


/* --------- ejemplo generadores sincrónico --------- */
function *fgRandom() {
    while(true) {
        yield Math.random()
    }
}
const random = fgRandom()

for(let i=0; i<10; i++ ){
    console.log( random.next().value )
}

/* ---------  Ejemplo de generador asincrónico para encadenar las peticiones Ajax ---------- */
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for-await...of

const url = 'https://jsonplaceholder.typicode.com/posts/'

async function *fgPosts() {
    for(let i=1; i<=5; i++) {
        yield fetch(url+i).then(response => response.json())
    }
}

;( async () => {
    for await (let post of fgPosts()) {
        console.log(post)
    }
})()


/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
console.log(`
/* ---------------------------------------------------- */
/*        Promise Push (Activa) - Single Data           */
/* ---------------------------------------------------- */
`)
/* Productor de datos */
var contadorPromise = 0
function contarPromise(tiempo) {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(contadorPromise++)
        },tiempo)
    })
}

/* consumidor de datos */
contarPromise(1).then(contador => console.log('Promise', contador))
contarPromise(1).then(contador => console.log('Promise', contador))
contarPromise(1).then(contador => console.log('Promise', contador))
contarPromise(1).then(contador => console.log('Promise', contador))


/* ----------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------- */
console.log(`
/* ---------------------------------------------------- */
/*      Observables Push (Activa) - Multiple Data       */
/* ---------------------------------------------------- */
`)

//const Observable = rxjs.Observable
//const { Observable : Observable } = rxjs      //Destructuring Object
const { Observable } = rxjs                     //Destructuring Object

/* Productor de datos (Pub) */
var contadorObservable = 0
function contarObservable(tiempo) {
    return new Observable( suscriber => {
        const refTimer = setInterval(() => {
            console.warn(contadorObservable)
            suscriber.next(contadorObservable++)
        },tiempo)

        return () => {
            console.warn('contarObservable desuscripto')
            clearInterval(refTimer)
        }
    })
}

/* consumidor de datos (Sub) */
// --> suscripción
let suscripcion =  contarObservable(1).subscribe(contador => console.log('Observable', contador))
// --> desuscripción
setTimeout(() => {
    suscripcion.unsubscribe()
},5)


/* ------------------------------------------------------------------------ */
/*                espejarInput: Otro ejemplo de Observables                 */
/* ------------------------------------------------------------------------ */
function espejarInput() {
    const input = document.querySelector('input')
    return new Observable( suscriber => {

        const ateEventInput = () => {
            let dato = input.value.split('').reverse().join('')
            console.warn(dato)
            suscriber.next(dato)
        }
        input.addEventListener('input', ateEventInput)

        return () => {
            console.warn('espejarInput desuscripto')
            input.removeEventListener('input',ateEventInput)
        }
    })
}

/* Observable: Publicador (pub) */
let obsEspejarInput = espejarInput()

/* Suscriber: Suscriptor (Sub) */
const suscripcion_1 = obsEspejarInput.subscribe( dato => document.querySelectorAll('span')[0].innerText = dato )
const suscripcion_2 = obsEspejarInput.subscribe( dato => document.querySelectorAll('span')[1].innerText = dato )
const suscripcion_3 = obsEspejarInput.subscribe( dato => document.querySelectorAll('span')[2].innerText = dato )

/* Desuscripción */
setTimeout(() => {
    suscripcion_1.unsubscribe()
},10000)

setTimeout(() => {
    suscripcion_2.unsubscribe()
},15000)

setTimeout(() => {
    suscripcion_3.unsubscribe()
},20000)

/* -------------------------------------------------------- */
let suscripcion_4
setTimeout(() => {
    suscripcion_4 = obsEspejarInput.subscribe( dato => document.querySelectorAll('span')[1].innerText = dato )
},25000)

setTimeout(() => {
    suscripcion_4.unsubscribe()
},30000)
