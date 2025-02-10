        //Operadores

    //Operadores aritmeticos:

let a = 5
let b = 10

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicacion
console.log(a / b) //Divicion

console.log(a % b) //Modulo
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

            //Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable +=2
console.log(myVariable)
myVariable -=2
console.log(myVariable)
myVariable *=2
console.log(myVariable)
myVariable /=2
console.log(myVariable)
myVariable %=2
console.log(myVariable)
myVariable **=2
console.log(myVariable)


            //Operadores de de comparacion

console.log(a > b) //False
console.log(a < b) //True
console.log(a >= b) //False
console.log(a <= b) //True
console.log(a == b) //False
console.log(a == 6) //Igualdad por valor
console.log(a == "6") //Igualdad por valor
console.log(a == a)
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6") //Igualdad por valor pero no por tipo por eso el "False"
console.log(a != 6) //A no es distinto de 6 por eso el "False"
console.log(a !== "6") //Lo contrario al anterior 2

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

            //Operadores logicos
            //and (&&) "una y otra"
console.log(5 > 10 && 15 > 20) // Si als 2 condiciones son falsas arroja un "False"
console.log(5 < 10 && 15 < 20) // Si las 2 condiciones son verdaderas arroja un "True"
console.log(5 < 10 && 15 > 20) //Si hay una exprecion falsa y una true, no se cumple por lo tanto arroja "False"

            //or (||) una o la otra
console.log(5 > 10 || 15 > 20) //No se cumple ninguna "False"
console.log(5 < 10 || 15 <  20)  //Se cumplen las 2 "True"
console.log(5 < 10 || 15 > 20) //Se cumple al menos 1 "True"
console.log(5 > 10 || 15 > 20 || 30 > 40) //"False" por que no se cumple ninguna
console.log(5 > 10 && 15 > 20 || 30 < 40) //"True" por que se cumplio el or

            //not (!) para negar
console.log(!true) //Esta invirtiendo el valor al negar por eso da False
console.log(!false) //Esta invirtiendo el valor al negar por eso da true
console.log(!(5 > 10 && 15 > 20)) //Esta invirtiendo el valor al negar por eso da true
console.log(!(5 > 10 || 15 > 20)) //Esta invirtiendo el valor al negar por eso da true

            //Operadores ternarios (?)(:)
const isRaining = true

isRaining ? console.log("Está lloviendo")/*true*/ : console.log("No está lloviendo")//false