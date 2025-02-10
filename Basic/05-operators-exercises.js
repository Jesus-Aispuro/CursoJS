/*
Clase 20 - Ejercicios: Operadores
*/

// 1. Crea una variable para cada operación aritmética
    let suma 
    let resta
    let multiplicacion
    let division
    let modulo
    let exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    let resultadoSuma
    let resultadoResta
    let resultadoMultiplicacion
    let resultadoDivide
    let resultadoModulo
    let resultadoExponente
    
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log(5 < 10)
    console.log(12 <= 24)
    console.log(30 >= 12)
    console.log(0 !== 10)
    console.log(2 === 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(5 > 10)
    console.log(12 >= 24)
    console.log(30 <= 12)
    console.log(0 === 10)
    console.log(2 !== 2)

// 5. Utiliza el operador lógico and
    console.log(5 > 10 && 15 > 20)

// 6. Utiliza el operador lógico or
    console.log(5 > 10 || 15 > 20)  

// 7. Combina ambos operadores lógicos
    console.log(5 < 10 && 15 > 10 || 10 < 5 )

// 8. Añade alguna negación
    console.log(5 < 10 && 15 > 10 || 10 < 5 && 5 !== 5)

// 9. Utiliza el operador ternario
    const trabajo = true
    trabajo ? console.log("Esta trabajando!") : console.log("No esta trabajando!")

// 10. Combina operadores aritméticos, de comparáción y lógicas
    suma = 5 + 20
    resta = 20 - 5

   console.log(suma <= resta && 20 == resta || suma === 25 && resta !== 25)