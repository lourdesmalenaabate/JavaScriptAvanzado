console.log(document.querySelector('title').innerText)

/* -------------------------------------------------------- */
/*        Objetos en Javascript : forma para crearlos       */
/* -------------------------------------------------------- */
// 1) Forma literal (JS5)
// 2) Utilizando el método create de Object (JS5)
// 3) Utilizando funciones constructoras (JS5)
//      a) Factory (fábrica de objetos)
//      b) Operador new
// 4) Utilizando la función constructora class (ES6)
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
console.log('\n/* 1) Forma Literal */')

let a = { nombre: 'Juan' }
console.log(a)

console.log(a.nombre)
console.log(a.hasOwnProperty('nombre'))
console.log(a.hasOwnProperty('edad'))


/* -------------------------------------------------------- */
console.log('\n/* 2) Función create de Object */')

let prototipo1 = {
    saludo : function() {
        console.log('Hola soy el prototipo 1')
    }
}

/* let prototipo2 = {
    saludo : function() {
        console.log('Hola soy el prototipo 2')
    }
} */

//let prototipo2 = Object.create(null)
let prototipo2 = Object.create(Object.prototype)
prototipo2.saludo = function() {
    console.log('Hola soy el prototipo 2')
}
console.log('prototipo2', prototipo2)

//let b = Object.create(null)
//let b = Object.create(Object.prototype)
let b = Object.create(prototipo1)
console.log(b)

let c = Object.create(prototipo1)
console.log(c)

let d = Object.create(prototipo2)
console.log(d)

console.log(prototipo1.isPrototypeOf(b))
console.log(prototipo1.isPrototypeOf(c))
console.log(prototipo1.isPrototypeOf(d))

console.log(prototipo2.isPrototypeOf(b))
console.log(prototipo2.isPrototypeOf(c))
console.log(prototipo2.isPrototypeOf(d))

/* -------------------------------------------------------- */
console.log('\n/* Propiedades Avanzadas: Función create de Object */')

console.log(`
/* ----------------------------------- */
/*           Objeto dinámico           */
/* ----------------------------------- */
`)

const dinamico = Object.create(Object.prototype)
dinamico.x = 1
dinamico.y = 2
//const dinamico = { x:1, y:2 }

console.log(dinamico)

//console.log(dinamico.x)          // Leo propiedad
//dinamico.x = 11                // Escribo propiedad
//delete dinamico.x              // borro propiedad
for(let key in dinamico) {       // Itero el objeto (recorro sus propiedades)
    console.log(key)
}

console.log(dinamico)


console.log(`
/* ----------------------------------- */
/*           Objeto estático           */
/* ----------------------------------- */
`)

const estatico = Object.create(Object.prototype, {
    x : {
        value : 1,
        writable : true,
        configurable: true,
        enumerable: true
    },
    y : {
        value : 2,
        enumerable: false
    }
})

console.log(estatico)

//console.log(estatico.x)          // Leo propiedad
//estatico.x = 11                // Escribo propiedad
//delete estatico.x              // borro propiedad
for(let key in estatico) {       // Itero el objeto (recorro sus propiedades)
    console.log(key)
}

console.log(estatico)


/* -------------------------------------------------------- */
console.log('\n/* 3) Funciones constructoras */')

console.log('\n/* 3.1) Análisis de una función en Javascript */')


/* -------------------------------------------------------- */
console.log('\n/* 3.1.a) Una función en JS es un Objeto */')

function foo() {
    console.log('Soy foo')
}

foo()

foo.x = true
console.log(foo.x)

console.log(foo)
console.dir(foo)


/* -------------------------------------------------------- */
console.log('\n/* 3.1.b) Una función en JS es variádica */')

/* function suma(a=0,b=0) {
    console.log(a,b)
    return a + b
} */

function suma(a,b) {
    a = a || 0
    b = b || 0      // short circuit operator
    console.log(a,b)
    return a + b
}

console.log(suma(5,6))


/* -------------------------------------------------------- */
console.log('\n/* 3.1.c) Una función en JS tiene ámbito o scope */')

var global = 'global'

function foo2(argumento2) {
    var local2 = 'local2'
    console.log(global, local2, argumento2)//, argumento3)// local3)
}

function foo3(argumento3) {
    var local3 = 'local3'
    console.log(global, local3, argumento3)//, argumento2)// local2)
}

foo2('argumento2')
foo3('argumento3')

console.log(global)
//console.log(local2)
//console.log(local3)
//console.log(argumento2)
//console.log(argumento3)


/* -------------------------------------------------------- */
console.log('\n/* 3.1.d) Una función en JS tiene contexto (this) */')

function foo4() {
    console.log(this)
}

foo4()

var nombre = 'Pedro'
var persona = {
    nombre : 'Juan',
    saludo : function() {
        //console.log(this)
        console.log('Hola soy ' + this.nombre)
    }
}

persona.saludo()

// PROBLEMA: pierdo el this (la referencia) al objeto persona
console.warn('Forma normal')
const saludoExt = persona.saludo
saludoExt()

//SOLUCIÓN CON apply, call, bind
console.warn('Forma apply')
saludoExt.apply(persona)

console.warn('Forma call')
saludoExt.call(persona)

console.warn('Forma bind')
saludoExt.bind(persona)()


/* -------------------------------------------------------- */
console.log('\n/* 3.1.e) Una función en JS tiene closure (clausuras) */')

function externa(x) {
    //console.log(x)
    //return x
    let z = 5
    return function interna(y) {
        console.log(y+x+z)
    }
}

let resultado = externa(50)
//console.log(x)
console.log(resultado)

resultado(10)

console.dir(resultado)

/* -------------------------------------------------------- */
console.log('\n/* 3.1.f) Formas de ejecutar una función en JS */')

var x = 11
function ctx(a,b) {
    console.log(this, this.x, a, b)
}

console.dir(ctx)

ctx(5,6)                    // forma normal de ejecución
ctx.apply({x:1},[5,6])      // forma de ejecución usando el método apply
ctx.call({x:1},5,6)         // forma de ejecución usando el método call
ctx.bind({x:1})(5,6)        // forma de ejecución usando el método bind



