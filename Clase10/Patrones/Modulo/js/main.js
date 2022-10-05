console.log(`
/* --------------------------------------- */
/*                 Módulo 1                */
/* --------------------------------------- */
`)

//console.log(x)   // ---> no funciona porque x es privada de la IIFE del módulo 1
//getX()           // ---> no funciona porque getX es privada de la IIFE del módulo 1

//window.modulo1()   // ---> SI funciona porque la propiedad modulo1 contiene la referencia hacia la función getX

console.log(modulo1)
modulo1()   // ---> SI funciona porque la propiedad modulo1 contiene la referencia hacia la función getX


console.log(`
/* --------------------------------------- */
/*                 Módulo 2                */
/* --------------------------------------- */
`)

//console.log(clave)
//console.log(getClaveEncriptada())

/* -------- Forma 1 --------- */
/* console.log(modulo2)
console.log(modulo2())

console.log(modulo3)
console.log(modulo3())

console.log(modulo4)
console.log(modulo4('Hola'))

console.log(modulo5)
console.log(modulo5()) */

/* -------- Forma 2 --------- */
console.log(modulo2.getClaveEncriptada)
console.log(modulo2.getClaveEncriptada())

console.log(modulo2.getClave)
console.log(modulo2.getClave())

console.log(modulo2.firmarTexto)
console.log(modulo2.firmarTexto('Hola'))

console.log(modulo2.getRandom1al10000)
console.log(modulo2.getRandom1al10000())

