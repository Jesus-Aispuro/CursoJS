/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = []
animals = ["Vaca", "Perro", "Gato", "Jirafa", "Toro"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.push("Elefante")
animals.unshift("Aguila")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2,1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let libros = new Set()
libros = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("libro1")
libros.add("Libro6")
console.log(libros)

// 6. Elimina uno concreto a tu elección
libros.delete("libro1")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let nombreMes = new Map()
nombreMes = new Map([
    [1, "Jesus"],
    [2, "Alberto"],
    [3, "Jesus"],
    [4, "Joisethe"],
    [5, "Liam"],
    [6, "Eithan"],
    [7, "Ismael"],
    [8, "Isabel"],
    [9, "Adriana"],
    [10, "Daniel"],
    [11, "Leonardo"],
    [12, "Joel"],
])
console.log(nombreMes.entries())

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(nombreMes.has("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mesesVerano = ["Junio", "Julio", "Agosto"]
nombreMes.set("Verano", mesesVerano)
console.log(nombreMes.entries())
console.log(mesesVerano)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let mySet = new Set(mesesVerano)
console.log(mySet)

nombreMes.set("nuevoSet", mySet)
