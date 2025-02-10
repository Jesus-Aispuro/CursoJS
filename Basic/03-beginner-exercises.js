// 1. Escribe un comentario en una linea
    //Este es un comentario sobre la misma linea

// 2. Escribe un comentario en varias lineas
    /*
    Esta es la
    forma correcta
    de comentar 
    varias lineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let nombre = "Jesus" //String
    let edad = "28" //Entero
    let altura = "1.77" //Decimal
    let estudiante = true //Boolean
    let matematicas = undefined
    let feliz = null //null
    let deudas = BigInt(54567786533455682763872667678865) // BigInt

// 4. Imprimir por consola todas las variables
    console.log(nombre)
    console.log(edad)
    console.log(altura)
    console.log(estudiante)
    console.log(matematicas)
    console.log(feliz)
    console.log(deudas)

// 5. Imprimir por consola el tipo de todas las variables
    console.log(typeof nombre )
    console.log(typeof edad)
    console.log(typeof altura)
    console.log(typeof estudiante)
    console.log(typeof matematicas)
    console.log(typeof feliz)
    console.log(typeof deudas)

// 6. A continuacion modifica el valor de las variables por otros de el mismo tipo.
    nombre = "jesus"
    edad = 38
    altura = 1.77
    estudiante = false
    matematicas = undefined
    feliz = null
    deudas = BigInt(89893492370238409723)

// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo
    nombre = false
    edad = "Veintinueve"
    altura = "Dos metros"
    estudiante = null
    matematicas = 3.1416
    feliz = "Muy feliz"
    deudas = undefined

// 8. Declara cosntantes con valores asociados a todos los tipos de datos primitivos
    const CONSTANT_STRING = "Esta es una constante de tipo string"
    const CONSTANT_NUMBER = 1995
    const CONSTANT_DECIMAL = 3.14
    const CONSTANT_BOOLEAN = true
    const CONSTANT_UNDEFINED = undefined
    const CONSTANT_NULL = null
    const CONSTANT_BIGINT = BigInt(43567890987655667888999)
    const CONSTANT_SYMBOL = Symbol("este es un símbolo")

// 9. A continuación, modifica los valores de las constantes
    //CONSTANT_STRING = "Cambiamos el valor"
    //CONSTANT_NUMBER = 2024
    //CONSTANT_DECIMAL = 3.39
    //CONSTANT_BOOLEAN = false
    //CONSTANT_UNDEFINED = undefined
    //CONSTANT_NULL = null
    //CONSTANT_BIGINT = 123455678909876655432n
    //CONSTANT_SYMBOL = Symbol("Este es otro simbolo")