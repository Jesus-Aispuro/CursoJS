//String

//Concatenacion
let myName = "Jesus"
let saludo = "Hola, " + myName + "!"
console.log(saludo)
console.log(typeof saludo)

//Longitud
console.log(saludo.length)

//Acceso a caracteres
console.log(saludo[2])
console.log(saludo[8])

// Metodos comunes
console.log(saludo.toUpperCase()) //Convierte todo a mayuscula
console.log(saludo.toLowerCase()) //Convierte todo a minuscula
console.log(saludo.indexOf("Hola")) //Te dice en que caracter empieza la palabra
console.log(saludo.indexOf("Jesus")) //Lo mismo.
console.log(saludo.indexOf("ChuriOne")) //lo busca pero no lo encuentra por que no esta.
console.log(saludo.includes("Hola")) //Te dise si esta la palabra
console.log(saludo.includes("Jesus")) //igual
console.log(saludo.includes("ChuriOne")) //igual
console.log(saludo.slice(0, 10))
console.log(saludo.replace("Jesus", "ChuriOne"))

//Template literals (Plantillas literares)
let message = `Hola! 
    Estoy 
estudiando 
JavaScript` //Utilizar `` hace que puedas agregar saltos de linea a tu string y se refleja en consola.
console.log(message)

let email = "jesusaispurog@hotmail.com"
console.log(`Hola, ${myName}! Tu email es: ${email}`)