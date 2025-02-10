/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set

// Declaración

let mySet = new Set() //El set asi debe de ser creado

console.log(mySet)

// Inicialización
//Para inicializar debe de ir el corchete dentro de los parentesiss. IMPORTANT!!
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete
//add añade dato al final.
mySet.add("https://moure.dev") 

console.log(mySet)
//delete elimina el dato indicado dentro de los parentesis (no utiliza indices, como el array)
mySet.delete("https://moure.dev")//dato exacto a eliminar

console.log(mySet)

console.log(mySet.delete("Brais")) //Aparte de borrar, tambien retorna el dato eliminado con true o false
console.log(mySet.delete(4)) //aqui da false indicando que no se borro el dato 

console.log(mySet)

// has
// esto es como para verificar si tenemos este dato en el 'set'
console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)