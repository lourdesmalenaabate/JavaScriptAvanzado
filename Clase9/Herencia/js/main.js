console.log(document.querySelector('title').textContent)

console.log('\nHerencia en JS5 y ES6')

//-------------------------------------------------------------------------
console.warn('\n/* ------ Utilizando JS5 ------ */')

//----------------------------------------------
console.log('\n/* ------ PERSONA JS5 ------ */')
function PersonaJS5(nombre, edad) {
    // ***** Propiedades instancia *****
    this.nombre = nombre
    this.edad = edad
}
console.dir(PersonaJS5)

// ***** Propiedad prototipo *****
PersonaJS5.prototype.saludo = function() {
    console.log('Hola!')
}

var diegoJS5 = new PersonaJS5('Diego',26)
console.log(diegoJS5)

var aliciaJS5 = new PersonaJS5('Alicia',24)
console.log(aliciaJS5)

//----------------------------------------------
console.log('\n/* ------ EMPLEADO JS5 ------ */')
function EmpleadoJS5(sueldo,nombre,edad) {
    // ***** Propiedades instancia *****
    PersonaJS5.call(this,nombre,edad)                           // ----> COMPOSICIÓN DE CLASES
    this.sueldo = sueldo
}
console.dir(EmpleadoJS5)

// ***** Propiedad prototipo *****
EmpleadoJS5.prototype = Object.create(PersonaJS5.prototype)     // ----> HERENCIA
EmpleadoJS5.prototype.trabajar = function() {
    console.log('Trabajando...')
}

var empleadoJS5 = new EmpleadoJS5(80000,'Diego',26)
console.log(empleadoJS5)


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
console.warn('\n/* ------ Utilizando ES6 ------ */')

//----------------------------------------------
console.log('\n/* ------ PERSONA ES6 ------ */')
class PersonaES6 {
    constructor(nombre, edad) {
        // ***** Propiedades instancia *****
        this.nombre = nombre
        this.edad = edad
    }
    // ***** Propiedad prototipo *****
    saludo() {
        console.log('Hola!')
    }
}
console.dir(PersonaES6)

var diegoES6 = new PersonaES6('Diego',26)
console.log(diegoES6)

var aliciaES6 = new PersonaES6('Alicia',24)
console.log(aliciaES6)

//----------------------------------------------
console.log('\n/* ------ EMPLEADO ES6 ------ */')

class EmpleadoES6 extends PersonaES6 {
    constructor(sueldo,nombre,edad) {
        super(nombre,edad)
        this.sueldo = sueldo
    }
    trabajar() {
        console.log('Trabajando...')
    }
}
console.dir(EmpleadoES6)

var empleadoES6 = new EmpleadoES6(80000,'Diego',26)
console.log(empleadoES6)
