//Exercícios de interpretação de código

/*1.
const bool1 = true
const bool2 = false
const bool3 = !bool2 //o contrário de 'false' é 'true'

let resultado = bool1 && bool2
console.log("a. ", resultado) // true E false = false ## no operador lógico "E", se apenas um elemento retorna false, o resultado é false.

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)// true E false E true = false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // true E true = true

console.log("e. ", typeof resultado)// BOOLEAN

2.
let array
console.log('a. ', array)// retorna UNDEFINED

array = null
console.log('b. ', array)// retorna NULL

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)// retorna 11

let i = 0
console.log('d. ', array[i])// retornará 3, que é o primeiro elemento do array

array[i+1] = 19
console.log('e. ', array)// a soma do valor de i somado a 1, será o próprio 1 que indicara a posição onde o número 19 substituirá o numero 4, anteriormente na mesma posição.

const valor = array[i+6]
console.log('f. ', valor)// const valor retorna o vetor em sexta posição no array, que é o número 9.

//Exercícios de escrita de código

1.
let yourAge = prompt("Qual a sua idade?")
let bffAge = prompt ("Qual a idade do seu(sua) melhor amigo(a)?")

let older = yourAge > bffAge
window.alert("Sua idade é maior do que a do seu melhor amigo?" + " " + older)

2.
let evenNumber = prompt("Digite um número par?")

let remainder = Number(evenNumber)%2
console.log(remainder)// o resultado é sempre 0, visto q esse é o resto das divisões entre números pares.

//quando inserimos um número impar, seu resto é sempre 1, pois o número impar digitado será sempre acrescido de 1 para que se chegue ao resultado da operaÇão inversa deste pelo número 2. Ex: 17 = 8 * 2 + 1 */

3.

let listaDeTarefas = []
