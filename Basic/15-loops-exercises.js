
/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
        //Con el for:
for(let num = 1; num <= 20; num++)
    console.log(num)
        //While
num = 1
while(num <= 20){
    console.log(num)
    num++
}
        //do while
num = 1
do{
    console.log(num)
    num++
}while(num <= 20)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
        //for
num = 0
let total = 0
for(num = 1; num <= 100; num++ ){
    total += num
}
console.log(total)

        //while
num = 1
total = 0
while(num <=100){
    total += num
    num ++
}
console.log(total)

        //do while
num = 1
total = 0
do{
    total+=num
    num++
}while(num <=100)
console.log(total)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
        //for
num = 0
for(num = 1; num<=50; num++){
    if(num % 2 === 0){
        console.log(num)
    }
}
        //while
num = 1
while(num <= 50){
    if(num % 2 === 0){
        console.log(num)
    }
    num++
}
        //do While
num = 1
do{
    if(num % 2 === 0){
        console.log(num)
    }
    num++
}while(num <= 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
        //for of
let nombres = ["Jesus", "Alberto", "Liam", "Eithan", "Ismael"]
for(let lista of nombres){
    console.log(lista)
}

        //for
num = 0
for(num; num < nombres.length; num++){
    console.log(nombres[num])
}

        //while
num = 0
while(num < nombres.length){
    console.log(nombres[num])
    num++
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
        //for
let texto = "Hola buenas tardes, este es un texto solo para contar cuantas vocales hay dentro."
let vocales = "aeiouAEIOU"
let contador = 0
for(let i=0; i<texto.length; i++){
    if(vocales.includes(texto[i])){
        contador++
    }
}console.log("Numero de vocales for: " + contador)

        //while
contador = 0
i = 0
while(i < texto.length){
    if(vocales.includes(texto[i])){
        contador+=1
    }
    i++
}
console.log(`Numero de vocales while: ${contador}`)

        //do while
i=0
contador=0
do{
    if(vocales.includes(texto[i])){
        contador++
    }
    i++
    
}while(i < texto.length)
console.log(`Numero de vocales dowhile: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let producto = 1
for(i=0; i<num.length; i++){
    producto*=num[i]
}
console.log(`For: ${producto}`)

        //while
producto = 1
i=0
while(i<num.length){
    producto*=num[i]
    i++
}
console.log(`While ${producto}`)

        //dowhile
i=0
producto=1
do{
    producto*=num[i]
    i++

}while(i<num.length)
    console.log(`DoWhile: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
        //for
for(i=1; i<=10; i++) 
console.log(`5 x ${i} = ${5 * i}`)

        //while
i = 1
while(i <=10){
    console.log(`5 x ${i} = ${5*i}`)
    i++
}

        //DoWhile
i=1
do{
    console.log(`5 x ${i} = ${5*i}`)
    i++
}while(i<=10)

// 8. Usa un bucle para invertir una cadena de texto
        //for
let text = "Pseudocodigo"
let invert = ""
i = 0
for(let i = text.length - 1; i>= 0; i--){
    invert+=text[i]
}console.log(invert)

        //while
invert = ""
i = text.length -1
while(i>=0){
    invert+=text[i]
    i--
}console.log(invert)

        //DoWhile
invert = ""
i = text.length -1
do{
    invert+=text[i]
    i--
}while(i>=0)
console.log(invert)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
        //for
let a = 0
let b = 1
console.log(`For: ${a}`)
console.log(`For: ${b}`)

for (let i = 2; i < 10; i++) { 
    let next = a + b
    console.log(`For: ${next}`)
    a = b
    b = next
}

        //while
i=2
a = 0
b = 1
next = 0
console.log(`While: ${a}`)
console.log(`While: ${b}`)
while(i < 10){
    next=a+b
    a=b
    b=next
    console.log(`While: ${next}`)
    i++
}

        //DoWhile
i=2
a=0
b=1
next=0
console.log(`DoWhile: ${a}`)
console.log(`DoWhile: ${b}`)
do{
    next = a+b
    a=b
    b=next
    console.log(`DoWhile: ${next}`)
    i++
}while(i<10)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
        //for
num = [1, 22, 3, 44, 55, 12, 9, 6, 99]
let numMayor=Array()
for(i=0; i<num.length; i++){
    if(num[i]>10){
        numMayor.push(num[i])
    }
}console.log(numMayor)

        //while
numMayor= []
i=0
while(i<num.length){
    if(num[i]>10){
        numMayor.push(num[i])
    }
    i++
}console.log(numMayor)

        //DoWhile
numMayor = []
i = 0
do{
    if(num[i]>10){
        numMayor.push(num[i])
    }
    i++
}while(i<10)
console.log(numMayor)
