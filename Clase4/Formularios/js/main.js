console.log(document.querySelector('title').innerText)

/* ------------------------------------------------- */
/*                Eventos en formularios             */
/* ------------------------------------------------- */
/* let input = document.querySelector('input')

// 1) Evento de Click
let btn = document.getElementById('btn')
btn.addEventListener('click', e => {
    e.preventDefault()

    let valido = input.checkValidity()
    if(valido) {
        let valor = input.value
        console.log('Click','['+valor+']')
    }
    else {
        console.error('Este campo no es válido')
    }
}) */

// 2) Evento de Submit
/* let form = document.getElementById('formulario')
form.addEventListener('submit', e => {
    e.preventDefault()

    let valor = input.value
    console.log('Submit','['+valor+']')
}) */


/* --------------------------------------------------------------------------------- */
/*    Validaciones de formularios en JS (con carteles indicadores en HTML5 y JS)     */
/* --------------------------------------------------------------------------------- */
let input = document.querySelector('input')

input.setCustomValidityJS = function(mensaje) {
    let div = document.querySelector('div')
    div.innerText = mensaje
    div.style.display = mensaje? 'block' : 'none' // operador ternario
}

/* ----------------------------------------------------------- */
/*  Validación de la entrada usando estructuras condicionales  */
/* ----------------------------------------------------------- */
function validarInput(valor) {
    valor = valor.trim()
    
    let mensaje = ''

    let lg = valor.length

    //validación por Js de campo vacío
    if(lg == 0) {
        mensaje = 'Este campo es obligatorio'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)    //Cartel HTML5
        input.setCustomValidityJS(mensaje)    //Cartel JS
        return null
    }
    //validación por Js de campo mínimo
    else if(lg < 3) {
        mensaje = 'Este campo debe tener al menos 3 caracteres'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)    //Cartel HTML5
        input.setCustomValidityJS(mensaje)    //Cartel JS
        return null
    }
    //validación por Js de campo máximo
    else if(lg > 10) {
        mensaje = 'Este campo debe tener como máximo 10 caracteres'
        //console.error(mensaje)
        //input.setCustomValidity(mensaje)    //Cartel HTML5
        input.setCustomValidityJS(mensaje)    //Cartel JS
        return null
    }
    //validación por Js que no contenga espacios
    else if(valor.includes(' ')) {
        mensaje = 'Este campo no permite espacios intermedios'

        input.setCustomValidityJS(mensaje)    //Cartel JS
        return null
    }
    //validación por Js que no contenga asteristicos
    else if(valor.includes('*')) {
        mensaje = 'Este campo no permite asteriscos'

        input.setCustomValidityJS(mensaje)    //Cartel JS
        return null
    }
    //validación por Js que la primera letra sea mayúscula
    else if(!(valor[0] >= 'A' && valor[0] <= 'Z')) {
        mensaje = 'El primer caracter debe estar en mayúscula'

        input.setCustomValidityJS(mensaje)    //Cartel JS
        return null
    }

    //input.setCustomValidity(mensaje)    //Cartel HTML5
    input.setCustomValidityJS(mensaje)    //Cartel JS

    valor = encodeURIComponent(valor)

    return valor
}

/* ----------------------------------------------------------- */
/*    Validación de la entrada usando expresiones regulares    */
/* ----------------------------------------------------------- */
function validarInputRegExp(valor) {
    let mensaje = ''

    /* ------------------------------------ */
    /*      Ejemplo validación nombre       */
    /* ------------------------------------ */
    /* let validadorNombre = /^[A-Z][a-z]{2,9}$/
    if(!validadorNombre.test(valor)) {
        mensaje = 'Este campo no es válido'
        
        let lg = valor.length
        if(lg == 0) mensaje = 'Este campo es obligatorio'
        else if(lg < 3) mensaje = 'Este debe poseer al menos 3 caracteres'
        
        input.setCustomValidityJS(mensaje)

        return null
    } */

    /* ------------------------------------ */
    /*      Ejemplo validación email        */
    /* ------------------------------------ */
    //https://emailregex.com/
    let validadorEmail = /^\w+@\w+\.\w{2,3}(\.(ar|uy))?$/
    if(!validadorEmail.test(valor)) {
        mensaje = 'Debe escribir un email válido'
        
        input.setCustomValidityJS(mensaje)

        return null
    }

    input.setCustomValidityJS(mensaje)
    return valor
}


input.addEventListener('input', () => {
    //console.log(input.value)
    //validarInput(input.value)
    validarInputRegExp(input.value)
})

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    //let valor = validarInput(input.value)
    let valor = validarInputRegExp(input.value)
    if(valor) {
        console.log('Valor Ingresado','['+valor+']')
    }
})

/* ----------------------------------------------- */
/*             EXPRESIONES REGULARES               */
/*             https://regex101.com/               */
/* ----------------------------------------------- */
//let miRegExp = new RegExp('a bc','i')     //Forma declarativa tipo objeto
let miRegExp = /a bc/i                      //Forma declarativa tipo literal

let mensaje = 'Hola a Bc mundo'
let valido = miRegExp.test(mensaje)

console.log('Mensaje: ' + mensaje + ' -> validación:', valido)


// ---- Sin RegExp -----
/* const validarA_Z581 = chr => {
    if((chr >= 'A' && chr <= 'Z') || chr == '5' || chr == '8' || chr == '1')
         return true
    return false
} */

// ---- Con RegExp -----
const validarA_Z581 = chr => {
    if(/[A-Z581]/.test(chr)) return true
    return false
}

console.log(validarA_Z581('A'))
