console.log(document.querySelector('title').innerText)

/* ------------------------------------------------- */
console.log('\n/* CALLBACKS */')
/* ------------------------------------------------- */

var uno = () => {
    console.log('Soy la función 1')
}

var dos = () => {
    console.log('Soy la función 2')
}

uno()
dos()

console.log('--------------------')

function prueba(item, callback) {
    console.log(item,callback)
    
    /* if(callback) callback()
    else console.error(`Prueba: el callback ${callback} no esta definido`) */

    if(typeof callback == 'function') callback()
    else console.error(`Prueba: el callback "${callback}" no es una función`)
}

prueba(1, uno)
prueba(2, dos)
prueba(3, 'pepe')

function prueba2(item, cb1, cb2) {
    console.log(item)
    
    if(typeof cb1 == 'function') cb1()
    else console.error(`Prueba: el callback 1 "${cb1}" no es una función`)

    if(typeof cb2 == 'function') cb2()
    else console.error(`Prueba: el callback 2 "${cb2}" no es una función`)
}

prueba2(4,uno,dos)

console.log('--------------------')

function operacion(a,b,cb) {
    if(typeof cb != 'function') return ' *** OPERACIÓN NO DEFINIDA ***'
    return cb(a,b)
}

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const mult = (a,b) => a * b
const div = (a,b) => a / b

var num1 = 15, num2 = 6

console.log(`La suma entre ${num1} y ${num2} es ${operacion(num1,num2,suma)}`)
console.log(`La resta entre ${num1} y ${num2} es ${operacion(num1,num2,resta)}`)
console.log(`La multiplicación entre ${num1} y ${num2} es ${operacion(num1,num2,mult)}`)
console.log(`La división entre ${num1} y ${num2} es ${operacion(num1,num2,div)}`)
console.log(`La ???? entre ${num1} y ${num2} es ${operacion(num1,num2)}`)

console.log(`El módulo entre ${num1} y ${num2} es ${operacion( num1, num2, (x,y) => x % y )}`)
console.log(`El módulo entre ${num1} y ${num2} es ${operacion( num1, num2, function(x,y) {return x % y} )}`)


/* ------------------------------------------------- */
console.log('\n/* EVENTOS */')
/* ------------------------------------------------- */

var btn = document.getElementById('btn')

//btn.onclick = console.log('Click!') // NO FUNCIONA: porque la propiedad onclick necesita está inicializada con un callback
// if(onclick) onclick()

/* function click() {
    console.log('Click!')
} */

/* const click = function() {
    console.log('Click!')
} */

const click = () => console.log('Click!')

//btn.onclick = click
//btn.onclick = () => console.log('Click!')
//btn.onclick = function() { console.log('Click!') }


/* ------------------------------------------------- */
console.log('\n/* EVENTOS con callbacks múltiples */')
/* ------------------------------------------------- */

/*
btn.onclick = uno
btn.onclick = dos
*/

/* Forma 1 */
/* btn.onclick = () => {
    uno()
    dos()
} */

/* Forma 2 -> con addEventListener */
btn.addEventListener('click', uno)
btn.addEventListener('click', dos)
btn.addEventListener('click', function() {
    console.log('Soy otra función')
})
btn.addEventListener('click', () => {
    console.log('Soy otra función 2')
})

/* ------------------------------------------------- */
console.log('\n/* Objeto Event (e) */')
/* ------------------------------------------------- */
btn.addEventListener('click', function(e) {
    console.log(e)
})
btn.addEventListener('click', e => {
    console.log(e)
})

function procesarEventoClick(e) {
    console.log('procesarEventoClick',e)
}

btn.addEventListener('click', procesarEventoClick)

/* -------------------------------------------------------------- */
console.log('\n/* Propagacion de Eventos (BUBBLING y CAPTURING) */')
/* -------------------------------------------------------------- */

var UNO = document.getElementById('uno')
var DOS = document.getElementById('dos')
var TRES = document.getElementById('tres')

TRES.addEventListener('click', function(e) {
    //e.stopPropagation() //Detiene la propagación del evento en la dirección indicada
    console.log('click en TRES')
},false)    // false ó no definido : BUBBLING, true : CAPTURING -> Dirección de propagación del evento

DOS.addEventListener('click', function(e) {
    //e.stopPropagation()
    console.log('click en DOS')
},false)    // false ó no definido : BUBBLING, true : CAPTURING -> Dirección de propagación del evento

UNO.addEventListener('click', function(e) {
    console.log('click en UNO')
},false)    // false ó no definido : BUBBLING, true : CAPTURING -> Dirección de propagación del evento


/* -------------------------------------------------------------- */
console.log('\n/* Aplicación avanzada de propagación de eventos */')
/* -------------------------------------------------------------- */

var estatico = document.getElementById('estatico')

var botonCreado = false
estatico.addEventListener('click', function() {
    console.log('Click en botón estático')

    if(!botonCreado) {
        var dinamico = document.createElement('button')
        dinamico.innerText = 'Dinámico'
        dinamico.id = 'dinamico'
        document.body.appendChild(dinamico)
    
        botonCreado = true
    }
})

