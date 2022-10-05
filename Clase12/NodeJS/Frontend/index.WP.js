//https://webpack.js.org/
// 1) npm i webpack@4.43.0 webpack-cli@3.3.12
// 2) .\node_modules\.bin\webpack index.JS5.js index.WP.js -o index.min.js -w --mode="production"
//    .\node_modules\.bin\webpack index.JS5.js index.WP.js -o index.min.js -w --mode="development"

console.log('--------------------------------------------------')
console.log('Hola soy index.WP.js')

const num = 40

const dobleDe = a => 2*a

console.log(`El cuádruple de ${num} es ${dobleDe(dobleDe(num))}`)
