//https://www.typescriptlang.org/
//https://www.typescriptlang.org/docs/handbook/2/classes.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1) npm i typescript
// 2) .\node_modules\.bin\tsc index.TS.ts -w --noEmitOnError
var mensaje = 'Hola mundo soy Typescript';
//mensaje = true
console.log(mensaje);
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.printName = function () {
        console.log("Hola, " + this.getName());
    };
    return Base;
}());
//const b = new Base();
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.getName = function () {
        return "mundo";
    };
    return Derived;
}(Base));
var d = new Derived();
d.printName();
