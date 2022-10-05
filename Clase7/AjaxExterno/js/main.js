console.log(document.querySelector('title').textContent)

let url_cors = 'https://jsonplaceholder.typicode.com/posts'

/* CORS: Cross Origin Resource Sharing  */
/* JSONP: JSON Padding */
let url_nocors = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json'

let url = url_cors

let xhr = new XMLHttpRequest
xhr.open('get', url)
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        let respuesta = JSON.parse(xhr.response)
        console.log(typeof respuesta)
        console.log(respuesta)
    }
})

/* -------------------------------------------------------------- */
/*          JSONP : JSON Padding desde Javascript (xhr)           */
/* -------------------------------------------------------------- */
xhr.addEventListener('error', () => {
    console.error('Error Ajax')

    let script = document.createElement('script')
    script.src = url + '&callback=micallback'
    document.body.appendChild(script)
})

xhr.send()

function micallback(res) {
    console.log(res)
}