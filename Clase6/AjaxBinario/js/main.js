console.log(document.querySelector('title').textContent)

let xhr

function cargarImagen(imagen) {
    let img = document.querySelector('img')
    let progress = document.querySelector('progress')
    let span = document.querySelector('span')

    let porcentaje = 0

    img.src = ''
    progress.value = porcentaje
    span.innerText = porcentaje + '%'

    xhr = new XMLHttpRequest
    let urlSinCache = imagen + '?' + Date.now()
    xhr.open('get', urlSinCache)
    xhr.responseType = 'blob'
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let imagenBlob = xhr.response
            //console.log(imagenBlob)

            let url = URL.createObjectURL(imagenBlob)
            //console.log(url)

            //let img = document.createElement('img')
            img.src = url
            //document.body.appendChild(img)
        }
    })
    xhr.addEventListener('progress', e => {
        //console.log('descargando...',e)

        if(e.lengthComputable) {
            porcentaje = parseInt( (e.loaded * 100) / e.total )
            console.log(porcentaje + '%')

            progress.value = porcentaje
            span.innerText = porcentaje + '%'
        }
    })
    xhr.send()
}


let form = document.querySelector('form')
//let input = document.querySelector('input')
form.addEventListener('submit', e => {
    e.preventDefault()

    //console.dir(form)
    //console.dir(form[0])

    //let imagen = input.value
    
    // ---- input type text ----
    //let imagen = form[0].value
    //console.log(imagen)

    // ---- input type file ----
    let imagen = form[0].files[0].name
    console.log(imagen)
    cargarImagen(imagen)  
})
