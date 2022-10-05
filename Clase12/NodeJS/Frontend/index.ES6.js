//https://babeljs.io/

//1) npm i babel-cli babel-preset-env
//2) crear un archivo .babelrc
//3) .\node_modules\.bin\babel index.ES6.js -o index.JS5.js -w

console.log('--------------------------------------------------')
console.log('Hola soy index.ES6.js')

let mensaje = 'Hola'

const sumar = (a,b) => a + b

let a = 7, b = 18

console.log(`${mensaje}. La suma es ${a} más ${b} es ${sumar(a,b)}`)
