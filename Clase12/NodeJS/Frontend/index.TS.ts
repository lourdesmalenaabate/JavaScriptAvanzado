//https://www.typescriptlang.org/
//https://www.typescriptlang.org/docs/handbook/2/classes.html

// 1) npm i typescript
// 2) .\node_modules\.bin\tsc index.TS.ts -w --noEmitOnError

let mensaje:string = 'Hola mundo soy Typescript'
//mensaje = true

console.log(mensaje)

abstract class Base {
    abstract getName(): string;
   
    printName() {
      console.log("Hola, " + this.getName());
    }
 }
   
//const b = new Base();

class Derived extends Base {
  getName() {
    return "mundo";
  }
}
 
const d = new Derived();
d.printName();