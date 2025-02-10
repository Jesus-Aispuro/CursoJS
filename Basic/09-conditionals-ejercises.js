/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "j"
let mens = name == "j" ? "Jesus" : "No hay nombres"
console.log(mens)


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const contra = "Chuy370"
const usuario = "Jesus"
let mensaje = "Usuario y contraseña correcto" 
if(contra == "Chuy370" && usuario == "Jesus"){
    console.log(mensaje)
}else{
    console.log("No es lo correcto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 5
if(num > 0){
    console.log("El numero es positivo")
} else if(num < 0){
    console.log("El numero es negativo")
}else{
console.log("El numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 12
if(edad >= 18){
    console.log("Es mayor, usted puede votar")
}else{
    let faltan = 18 - edad
    console.log(`No puede votar, le faltan ${faltan} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const persona = edad >=18 ? "Usted ya es un adulto" : "Tu eres un menor"
console.log(persona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "noviembre"

if(mes == "enero" || mes == "febrero"|| mes == "diciembre"){
    console.log(`La estacion de ${mes} es: Invierno`)
}else if(mes == "marzo" || mes == "abril" || mes == "mayo"){
    console.log(`La estacion de ${mes} es: Primavera`)
}else if(mes == "junio" || mes == "julio" || mes == "agosto"){
    console.log(`La estacion de ${mes} es: Verano`)
}else if(mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
    console.log(`La estacion de ${mes} es: Otoño`)
}else{
    console.log("El mes no es valido")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if(mes == "enero"||mes == "marzo"||mes == "mayo"||mes == "julio"||mes == "agosto"||mes == "octubre"||mes == "diciembre"){
    console.log("Este mes tiene 31 dias")
}else if(mes == "febrero"){
    console.log("Este mes tiene 29 dias")
}else if(mes == "abril"||mes == "junio" || mes == "septiembre" || mes == "noviembre"){
    console.log("Este mes tiene 30 dias")
}else{
    console.log("El mes no es valido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "italiano"

switch(idioma){
    case "ingles":
    console.log("Hello, good day!")
    break
    case "español":
    console.log("¡Hola, buen día!")
    break
    case "frances":
    console.log("Bonjour, bonne journée !")
    break
    case "aleman":
    console.log("Hallo, guten Tag!")
    break
    case "italiano":
    console.log("Ciao, buona giornata!")
    break
    case "portugues":
    console.log("Olá, bom dia!")
    break
    case "japones":
    console.log("こんにちは, 良い一日を! (Konnichiwa, yoi ichinichi o!)")
    break
    case "chino":
    console.log("你好, 祝你有美好的一天! (Nǐ hǎo, zhù nǐ yǒu měihǎo de yītiān!)")
    break
    default:
    console.log("Idioma no valido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case "enero":
    console.log(`La estacion de ${mes} es: Invierno`)
    break
    case "febrero":
    console.log(`La estacion de ${mes} es: Invierno`)
    break
    case "marzo":
    console.log(`La estacion de ${mes} es: Primavera`)
    break
    case "abril":
    console.log(`La estacion de ${mes} es: Primavera`)
    break
    case "mayo":
    console.log(`La estacion de ${mes} es: Primavera`)
    break
    case "junio":
    console.log(`La estacion de ${mes} es: Verano`)
    break
    case "julio":
    console.log(`La estacion de ${mes} es: Verano`)
    break
    case "agosto":
    console.log(`La estacion de ${mes} es: Verano`)
    break
    case "septiembre":
    console.log(`La estacion de ${mes} es: Otoño`)
    break
    case "octubre":
    console.log(`La estacion de ${mes} es: Otoño`)
    break
    case "noviembre":
    console.log(`La estacion de ${mes} es: Otoño`)
    break
    case "diciembre":
    console.log(`La estacion de ${mes} es: Invierno`)
    break
    default:
    console.log(`${mes} No es un mes valido`)
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7 
switch(mes){
    case "enero":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    case "febrero":
    console.log(`El mes de ${mes} Tiene 29 dias`)
    break
    case "marzo":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    case "abril":
    console.log(`El mes de ${mes} Tiene 30 dias`)
    break
    case "mayo":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    case "junio":
    console.log(`El mes de ${mes} Tiene 30 dias`)
    break
    case "julio":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    case "agosto":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    case "septiembre":
    console.log(`El mes de ${mes} Tiene 30 dias`)
    break
    case "octubre":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    case "noviembre":
    console.log(`El mes de ${mes} Tiene 30 dias`)
    break
    case "diciembre":
    console.log(`El mes de ${mes} Tiene 31 dias`)
    break
    default:
    console.log(`${mes} No es un mes valido`)
}