console.log(document.querySelector('title').textContent)


function repreContenidoFormData(data) {
    //console.log(data)

    let keys = data.keys()
    let values = data.values()

    /* console.log(keys)
    console.log(values)

    console.log(keys.next())
    console.log(keys.next())
    console.log(keys.next())

    console.log('---------------')

    console.log(values.next())
    console.log(values.next())
    console.log(values.next()) */

    do {
        let clave = keys.next()
        let valor = values.next()
        if(clave.done || valor.done) break
        console.log(clave.value, valor.value)
    }
    while(true)
}

/* --------------------------------------------------------------------- */
/*    FormData : uso con Formularios (carga de información automática)   */
/* --------------------------------------------------------------------- */
let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let data = new FormData(form)
    repreContenidoFormData(data)
    enviarFormDataAjax(data)
})

/* --------------------------------------------------------------------- */
/*                 FormData : con carga manual de datos                  */
/* --------------------------------------------------------------------- */
document.getElementById('btn-crear').addEventListener('click', () => {

    let data = new FormData()

    for(let i=0; i<10; i++) {
        data.append(`Param-${i+1}`, i+1)
    }

    repreContenidoFormData(data)
    enviarFormDataAjax(data)
})

function enviarFormDataAjax(data) {
    let xhr = new XMLHttpRequest
    //xhr.setRequestHeader('content-type','application/json')
    xhr.open('post','url')
    xhr.send(data)
}