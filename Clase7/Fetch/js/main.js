console.log(document.querySelector('title').textContent)

let url = 'https://jsonplaceholder.typicode.com/posts/'


async function opcionesPeticionAjax(id) {

    /* ----------------------------------------- */
    /*      Opción 1 : XMLHttpRequest (xhr)      */
    /* ----------------------------------------- */
    let xhr = new XMLHttpRequest
    xhr.open('get',url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest', respuesta)
        }
        else {
            console.error('Error XMLHttpRequest (status):', xhr.status)
        }
    })
    xhr.addEventListener('error', e => {
        console.error('Error XMLHttpRequest (ajax):', e)
    })
    xhr.send()

    /* ----------------------------------------- */
    /*      Opción 2 : fetch (then / catch)      */
    /* ----------------------------------------- */
    fetch(url+id)
    .then( response => response.json())
    .then ( respuesta => console.log('fetch (then / catch):', respuesta) )
    .catch( error => console.error('Error fetch (then / catch):', error))

    /* ----------------------------------------- */
    /*      Opción 3 : fetch (async / await)      */
    /* ----------------------------------------- */
    try {
        let response = await fetch(url+id)
        let respuesta = await response.json()
        console.log('fetch (async / await):', respuesta)
    }
    catch(error) {
        console.error('Error fetch (async / await):', error)
    }
}

//opcionesPeticionAjax(7)

/* ---------------------------------------------------------------------- */
/*          Peticiones asincrónicas anidadas utilizando fetch             */
/* ---------------------------------------------------------------------- */
function getPostFetch(id) {
    return fetch(url+id).then(response => response.json())
}

/* ------------------------------------------------- */
/*         fetch anidado con then / catch            */
/* ------------------------------------------------- */
function getPostsFetchThenCatch() {

    console.log('Inicio de peticiones')

    getPostFetch(1)
    .then( respuesta => {
        console.log(respuesta)
        return getPostFetch(2)
    })
    .then( respuesta => {
        console.log(respuesta)
        return getPostFetch(3)
    })
    .then( respuesta => {
        console.log(respuesta)
        return getPostFetch(4)
    })
    .then( respuesta => {
        console.log(respuesta)
        console.log('fin de peticiones')
    })           
    .catch(error => console.error('Error fetch anidado', error)) 
}

getPostsFetchThenCatch()

console.log('Otras tareas ...')
