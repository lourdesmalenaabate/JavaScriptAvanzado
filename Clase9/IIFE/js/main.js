'use strict'

console.log(document.querySelector('title').textContent)

console.log(`
/* ------------------------------------------------------ */
/*   MODO ESTRICTO DEL COMPILADOR DE JS -> 'use strict'   */
/* ------------------------------------------------------ */
`)

var a = 5   // Si no declaro el constructor de variable y no está el modo estricto habilitado
            // -> error silencioso
console.log(a)

// --------------------------------------
console.log('// Objeto dinámico')
var dinamico = {x:1}
console.log(dinamico)
dinamico.x = 11
console.log(dinamico)

// --------------------------------------
console.log('// Objeto estático')
var estatico = Object.create(Object.prototype, {
    x : {
        value : 1,
        writable: true  // en el caso de ser false y no estar el modo estricto habilitado,
                        // se produce una error silencioso
    }
})
console.log(estatico)
estatico.x = 11
console.log(estatico)


//---------------------------------------------------------
console.log(`
/* ------------------------------------------------------ */
/*          FUNCIONES AUTOINVOCADAS - IIFE (ify)          */
/* ------------------------------------------------------ */
// I : INMEDIATLY
// I : INVOKED
// F : FUNCTION
// E : EXPRESSION
/* ------------------------------------------------------ */
`)

;(function(num) {
    'use strict'
    var clave = 'qwerty123'
    console.warn('Librería instalada',num)
})(33)
