let a = 6
let b = 5

const sumar = (a,b) => a + b

let c = sumar(a,b)

console.log(`La suma de ${a} más ${b} es ${c}`)


const retardo = ms => new Promise(resolve => setTimeout(() => resolve('Ok'),ms))

//retardo(1000).then(rta => console.log(rta))

;( async () => {
    let rta = await retardo(1000)
    console.log(rta)
})()

//https://momentjs.com/docs/#/-project-status/
const moment = require('moment')

let now = moment().format('LL')
console.log(now)

