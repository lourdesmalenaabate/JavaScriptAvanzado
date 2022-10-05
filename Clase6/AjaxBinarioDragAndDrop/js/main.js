console.log(document.querySelector('title').textContent)

function cargarImagen(imagen) {
    let img = document.querySelector('img')
    let progress = document.querySelector('progress')
    let span = document.querySelector('span')

    let porcentaje = 0

    img.src = ''
    progress.value = porcentaje
    span.innerText = porcentaje + '%'

    progress.style.display = 'inline-block'
    span.style.display = 'inline'

    let xhr = new XMLHttpRequest
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

            setTimeout(() => {
                /* progress.style.display = 'none'
                span.style.display = 'none' */
            },2000)
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

/* ------------------------------------------------------------------------- */
/*                   Registro de eventos de Drag And Drop                    */
/* ------------------------------------------------------------------------- */
let drop = document.getElementById('drop')

drop.addEventListener('dragenter', e => {
    e.preventDefault()
    console.log('Estoy adentro del Drop')
})

drop.addEventListener('dragleave', e => {
    e.preventDefault()
    console.log('Estoy afuera del Drop')
})

drop.addEventListener('dragover', e => {
    e.preventDefault()
    console.log('Estoy encima del Drop')
})

/* --------------------------------------------------------------- */
/*         Petición del recurso mediante Drag And Drop             */
/* --------------------------------------------------------------- */
drop.addEventListener('drop', e => {
    e.preventDefault()
    console.log('Solté el recurso', e)

    //console.log(e.dataTransfer.files)
    
    let imagen = e.dataTransfer.files[0].name
    console.log(imagen)
    cargarImagen(imagen)  
})

/* Cancelo el evento automático de DD en el resto del documento */
document.addEventListener('dragenter', e => e.preventDefault())
document.addEventListener('dragleave', e => e.preventDefault())
document.addEventListener('dragover', e => e.preventDefault())
document.addEventListener('drop', e => e.preventDefault())


/* --------------------------------------------------------------- */
/*     Petición del recurso mediante input file: file manager      */
/* --------------------------------------------------------------- */
let input = document.querySelector('input')
input.addEventListener('change', () => {
    console.log('Cambió el input')

    // ---- input type file ----
    let imagen = input.files[0].name
    console.log(imagen)
    cargarImagen(imagen)  

    input.value = ''
})
