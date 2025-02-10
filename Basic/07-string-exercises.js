/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let name = "Jesus"
let ciudad = "Tijuana"
let saludo = "Hola! soy " + name +" de " +ciudad
console.log(saludo)

// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length)

// 3. Muestra el primer y último carácter de un string
console.log(saludo[0])
console.log(saludo[25])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase()) //Mayusculas
console.log(saludo.toLowerCase()) //Minusculas

// 5. Crea una cadena de texto en varias líneas
let message = `No me gusta
pistear, pero
no me porto
muy bien.`
console.log(message)

// 6. Interpola el valor de una variable en un string
console.log(`Hola, mi nombre es ${name} y tengo 28 años y soy de ${ciudad} `)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(message.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes("pistear"))

// 9. Comprueba si dos strings son iguales
console.log(message == saludo)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(message.length == saludo.length)