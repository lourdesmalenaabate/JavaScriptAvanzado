'use strict';

//https://babeljs.io/

//1) npm i babel-cli babel-preset-env
//2) crear un archivo .babelrc
//3) .\node_modules\.bin\babel index.ES6.js -o index.JS5.js -w

console.log('--------------------------------------------------');
console.log('Hola soy index.ES6.js');

var mensaje = 'Hola!!';

var sumar = function sumar(a, b) {
  return a + b;
};

var a = 7,
    b = 18;

console.log(mensaje + '. La suma es ' + a + ' m\xE1s ' + b + ' es ' + sumar(a, b));
