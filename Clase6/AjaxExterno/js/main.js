console.log(document.querySelector('title').textContent)

//let url = 'https://jsonplaceholder.typicode.com/posts'

/* CORS: Cross Origin Resource Sharing  */
/* JSONP: JSON Padding */
let url = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json'

let xhr = new XMLHttpRequest
xhr.open('get', url)
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        let respuesta = JSON.parse(xhr.response)
        console.log(typeof respuesta)
        console.log(respuesta)
    }
})
xhr.send()