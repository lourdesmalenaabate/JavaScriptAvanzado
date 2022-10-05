console.log(document.querySelector('title').textContent)

/* --------------------------------------------------------------------------- */
/*          Ejemplo de persistencia en localStorage y sessionStorage           */
/* --------------------------------------------------------------------------- */
//var a =  Number(localStorage.getItem('a')) || 1
var a =  Number(sessionStorage.getItem('a')) || 1

function cambiar(val) {
    a = val
    //localStorage.setItem('a', a)
    sessionStorage.setItem('a', a)
    return 'ok update'
}

console.log(`
/* ------------------------------------------------------- */
/*             Ejemplo de uso del localStorage             */
/* ------------------------------------------------------- */
`)

/* localStorage.setItem('usuario', 'Juan')
localStorage.setItem('numero', 3)
localStorage.setItem('boolean', true)
localStorage.setItem('objeto', JSON.stringify({x:1})) */

/* console.log( String(localStorage.getItem('usuario')) )
console.log( Number(localStorage.getItem('numero')) )
console.log( Boolean(localStorage.getItem('boolean')) )
console.log( JSON.parse(localStorage.getItem('objeto')) ) */

/*
console.log( localStorage.getItem('usuario') )
console.log( JSON.parse(localStorage.getItem('numero')) )
console.log( JSON.parse(localStorage.getItem('boolean')) )
console.log( JSON.parse(localStorage.getItem('objeto')) )
*/

function representarStorage(storage) {
    for(let i=0,valor; i<storage.length; i++) {
        let clave = storage.key(i)

        try { valor = JSON.parse(storage.getItem(clave)) }
        catch { valor = storage.getItem(clave) } // -> catch unbinding

        console.log(clave, valor)
    }
}


//console.log('------ antes -------')
representarStorage(localStorage)

//localStorage.removeItem('a')
//localStorage.clear()

//console.log('------ después -------')
//representarStorage(localStorage)

/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
console.log(`
/* ------------------------------------------------------- */
/*            Ejemplo de uso del sessionStorage            */
/* ------------------------------------------------------- */
`)

/* sessionStorage.setItem('usuario', 'Juan')
sessionStorage.setItem('numero', 3)
sessionStorage.setItem('boolean', true)
sessionStorage.setItem('objeto', JSON.stringify({x:1}))
 */
//console.log('------ antes -------')
representarStorage(sessionStorage)

//sessionStorage.removeItem('numero')
//sessionStorage.clear()

//console.log('------ después -------')
//representarStorage(sessionStorage)


console.log(`
/* ------------------------------------------------------- */
/*                Eventos de almacenamiento                */
/* ------------------------------------------------------- */
`)
setInterval(() => {
    localStorage.setItem('fyh', new Date().toLocaleString())
},2000)


/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
console.log(`
/* ------------------------------------------------------- */
/*                Ejemplo de uso de cookies                */
/* ------------------------------------------------------- */
`)

//Sin tiempo de expiración
//document.cookie = 'usuario2=Pablo'

//Con tiempo de expiración -> Max-age : tiempo de vida de la cookie en segundos
//document.cookie = 'usuario2=Pablo;Max-Age=30'


/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
console.log(`
/* ------------------------------------------------------- */
/*                     Chrome Dev Tools                    */
/* ------------------------------------------------------- */
`)