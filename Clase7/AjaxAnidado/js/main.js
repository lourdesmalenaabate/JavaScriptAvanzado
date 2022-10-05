console.log(document.querySelector('title').textContent)

let url = 'https://jsonplaceholder.typicode.com/posts/'

/* ------------------------------------------------------------------- */
/*        Petición asincrónica por Ajax NO ANIDADA ( desorden)         */
/* ------------------------------------------------------------------- */
function getPost(id) {
    let xhr = new XMLHttpRequest
    xhr.open('get', url + id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
        }
    })
    xhr.send()
}

function getPosts() {
    console.log('Inicio de las peticiones')
    getPost(1)
    getPost(2)
    getPost(3)
    getPost(4)
    console.log('Fin de las peticiones')
}

//getPosts()


/* ------------------------------------------------------------------- */
/*    Petición asincrónica por Ajax ANIDADA (orden) usando callbacks   */
/* ------------------------------------------------------------------- */
function getPostCb(id, cb) {
    let xhr = new XMLHttpRequest
    xhr.open('get', url + id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            //console.log(respuesta)
            if(cb) cb(respuesta)
        }
    })
    xhr.send()
}

function getPostsCb() {
    console.log('Inicio de las peticiones')

    //PROBLEMA: CALLBACK HELL : infierno de Callbacks ó pirámide de la perdición
    getPostCb(1, rta => {
        console.log(rta)
        getPostCb(2, rta => {
            console.log(rta)
            getPostCb(3, rta => {
                console.log(rta)
                getPostCb(4, rta => {
                    console.log(rta)
                    console.log('Fin de las peticiones')
                })
            })
        })
    })
}

//getPostsCb()


/* ------------------------------------------------------------------- */
/*    Petición asincrónica por Ajax ANIDADA (orden) usando promesas    */
/* ------------------------------------------------------------------- */
function getPostPromise(id) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest
        xhr.open('get', url + id)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let respuesta = JSON.parse(xhr.response)
                //console.log(respuesta)
                resolve(respuesta)
            }
            else {
                let error = {
                    title: 'error status',
                    id : id,
                    body: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => {
            let error = {
                title: 'error Ajax',
                id: id,
                body: e
            }
            reject(error)
        })

        xhr.send()
    })
}

//url = 'https://jsonplaceholder.typicodezzzzzz.com/posts/'  // para generar error ajax

/* ------------------------------------------------------------------- */
/*        Uso de promesas anidadas con sintaxis then / catch           */
/* ------------------------------------------------------------------- */
function getPostsPromiseThenCatch() {
    console.log('Inicio de las peticiones')

    getPostPromise(1)
    .then(rta => {
        console.log(rta)
        return getPostPromise(2)
    })
    .then(rta => {
        console.log(rta)
        //return getPostPromise(333)  // para generar el error de status
        return getPostPromise(3)
    })
    .then(rta => {
        console.log(rta)
        return getPostPromise(4)
    })
    .then(rta => {
        console.log(rta)
        console.log('Fin de las peticiones')
    })
    .catch(error => console.error(error))
}

//getPostsPromiseThenCatch()


/* ------------------------------------------------------------------- */
/*        Uso de promesas anidadas con sintaxis async / await          */
/* ------------------------------------------------------------------- */
//async function getPostsPromiseAsyncAwait() {
//const getPostsPromiseAsyncAwait = async function() {
const getPostsPromiseAsyncAwait = async () => {
            console.log('Inicio de las peticiones')

    try {
        for(let id=1; id<=4; id++) {
            //let rta = await getPostPromise(id==3?333:id) // para generar el error de status
            let rta = await getPostPromise(id)
            console.log(rta)
        }
        /*
        let rta = await getPostPromise(1)
        console.log(rta)

        rta = await getPostPromise(2)
        console.log(rta)

        //rta = await getPostPromise(333) // para generar el error de status
        rta = await getPostPromise(3)
        console.log(rta)

        rta = await getPostPromise(4)
        console.log(rta)
        */
        console.log('Fin de las peticiones')
    }
    catch(error) { //catch unbinding -> catch {}
        console.error(error)
    }
}

getPostsPromiseAsyncAwait()


console.log('Otras Tareas ...')
