console.log(document.querySelector('title').textContent)

console.log(`
/* ------------------------------------- */
/*        Código sincrónico en JS        */
/* ------------------------------------- */
`)

/* function delaySync() {
    for(let i=0; i<3e9; i++) {}
}

console.log('Inicio de Tareas')

console.log('Tarea A - paso 1'); delaySync()
console.log('Tarea A - paso 2'); delaySync()
console.log('Tarea A - paso 3'); delaySync()
console.log('Tarea A - paso 4'); delaySync()
console.log('Fin de Tarea A')

console.log('Tarea B - paso 1'); delaySync()
console.log('Tarea B - paso 2'); delaySync()
console.log('Tarea B - paso 3'); delaySync()
console.log('Tarea B - paso 4'); delaySync()
console.log('Fin de Tarea B')


console.log('Otras Tareas ...') */


console.log(`
/* ------------------------------------- */
/*        Código Asincrónico en JS       */
/* ------------------------------------- */
`)
/* 
function delayASync(cb) {
    setTimeout(cb,1500)
}

console.log('Inicio de Tareas')

console.log('Tarea A - paso 1')
delayASync(() => {
    console.log('Tarea A - paso 2')
    delayASync(() => {
        console.log('Tarea A - paso 3')
        delayASync(() => {
            console.log('Tarea A - paso 4')
            delayASync(() => {
                console.log('Fin de Tarea A')
            })            
        })        
    })
})

console.log('Tarea B - paso 1')
delayASync(() => {
    console.log('Tarea B - paso 2')
    delayASync(() => {
        console.log('Tarea B - paso 3')
        delayASync(() => {
            console.log('Tarea B - paso 4')
            delayASync(() => {
                console.log('Fin de Tarea B')
            })            
        })        
    })
})

console.log('Otras Tareas ...') */


console.log(`
/* --------------------------------------------------------------------- */
/*       Comunicación asincrónica con Ajax (XMLHttpRequest - xhr)        */
/*             Ajax : Asynchronous Javascript And XML                    */
/* --------------------------------------------------------------------- */
`)

/*
---------------------------------------------------------------
xhr.readyState
0 -> La instancia está creada
1 -> La instancia está configurada
2 -> Hay intercambio de headers entre el cliente y el servidor
3 -> Transferencia de información
4 -> Fin de la comunicación (ok o error)
---------------------------------------------------------------
xhr.status
https://developer.mozilla.org/es/docs/Web/HTTP/Status
200 -> transferencia correcta
404 -> recurso no encontrado
otros -> errores / info
---------------------------------------------------------------
*/

let xhr = new XMLHttpRequest
console.log(xhr)
console.log(xhr.readyState)

xhr.addEventListener('readystatechange', () => {
    console.log('readystatechange -> ', xhr.readyState )

    /* if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            console.log(xhr.response)
        }
        else {
            console.error('Error status de comunicación', xhr.status)
        }
    } */
})

xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        console.log(xhr.response)
    }
    else {
        console.error('Error status de comunicación', xhr.status)
    }
})

xhr.open('get','texto.txt')

xhr.send()

/* setTimeout(() => {
    console.log(xhr.status, xhr.response)
},3000) */

