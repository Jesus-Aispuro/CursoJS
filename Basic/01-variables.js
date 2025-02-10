//let  YA NO SE UTILIZA AL DIA DE HOY


/*
"var" 
Reasignación: Sí se puede reasignar su valor.
let x = 10;
x = 20; // Esto es válido

Re-declaración en el mismo bloque: No es posible (en el mismo ámbito).

let y = 5;
let y = 10; // Error
Ámbito (Scope): Bloque. Es decir, solo está disponible dentro del bloque {} donde fue declarada.

{
    let z = 100;
    console.log(z); // 100
}
console.log(z); // Error: z is not defined */


/*
"const"
Reasignación: No se puede reasignar su valor.

const a = 10;
a = 20; // Error: Assignment to constant variable
Inmutabilidad del valor: El identificador no puede cambiar, pero los valores internos de estructuras como objetos o arreglos sí se pueden modificar.

const obj = { key: "value" };
obj.key = "newValue"; // Esto es válido

const arr = [1, 2, 3];
arr.push(4); // Esto es válido
console.log(arr); // [1, 2, 3, 4]
Sin embargo, no puedes reasignar todo el objeto o arreglo:

obj = {}; // Error
arr = []; // Error
Re-declaración: Igual que let, no es posible re-declarar en el mismo bloque.
Ámbito (Scope): También es de bloque, igual que let. 
*/
