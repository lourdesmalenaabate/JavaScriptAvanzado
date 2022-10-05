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

//url = 'https://jsonplaceholder.typicodezzzzz.com/posts/'    //url con error

/* ---------------------------------------------------------------------- */
/*          Peticiones asincrónicas anidadas utilizando fetch             */
/* ---------------------------------------------------------------------- */
function getPostFetch(id) {
    return fetch(url+id).then(response => {
        //console.log(response)
        if(!response.ok) throw 'ERROR EN STATUS: ' + response.status
        return response.json()
    })
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
    .catch(error => console.error('Error fetch anidado:', error)) 
}

//getPostsFetchThenCatch()

/* ------------------------------------------------- */
/*         fetch anidado con async / await           */
/* ------------------------------------------------- */
async function getPostsFetchAsyncAwait() {

    console.log('Inicio de peticiones')


    try {

        for(let id=1; id<=4; id++) {
            //let respuesta =  await getPostFetch(id==3?333:id)
            let respuesta =  await getPostFetch(id)
            console.log(respuesta)
        }
        /*
        let respuesta =  await getPostFetch(1)
        console.log(respuesta)

        respuesta =  await getPostFetch(2)
        console.log(respuesta)

        respuesta =  await getPostFetch(3)
        console.log(respuesta)

        respuesta =  await getPostFetch(4)
        console.log(respuesta)
        */
    }
    catch(error) {
        console.error('Error fetch anidado', error)
    }
}

getPostsFetchAsyncAwait()


console.log('Otras tareas ...')
