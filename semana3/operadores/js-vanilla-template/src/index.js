//Exercícios de interpretação de código

1.
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

//quando inserimos um número impar, seu resto é sempre 1, pois o número impar digitado será sempre acrescido de 1 para que se chegue ao resultado da operaÇão inversa deste pelo número 2. Ex: 17 = 8 * 2 + 1 

3.
let listaDeTarefas = []
console.log(listaDeTarefas)

let tarefa1 = prompt("Qual sua primeira tarefa do dia?")
console.log(tarefa1)
let tarefa2 = prompt("Qual sua segunda tarefa do dia?")
console.log(tarefa2)
let tarefa3 = prompt("Qual sua terceira tarefa do dia?")
console.log(tarefa3)

listaDeTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefas)

let removeTarefa = listaDeTarefas.length
console.log(removeTarefa)

removeTarefa = prompt("De 0 a 2, remova uma tarefa do dia?")

removeTarefa = listaDeTarefas.splice(removeTarefa, 1)
console.log(listaDeTarefas)

4.
let email = prompt("Digite seu email:")
console.log(email)
let nome = prompt("Digite seu nome:")
console.log(nome)

window.alert ("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + "!") 

// Desafio

let celsius

let kelvin

let farenheit

//a)
farenheit = 77

kelvin = (farenheit - 32) * 9/5 + 3
console.log(kelvin)// 84

//b)
celsius = 80

farenheit = celsius * 9/5 + 3
console.log(farenheit)// 147

//c)
celsius = 30
farenheit = celsius * 9/5 + 3
console.log(farenheit)

kelvin = celsius + 273,5
console.log(kelvin)

//d)
let celsius = prompt("Digite a temperatura em Celsius:")
console.log(celsius)

let farenheit = celsius * 9/5 + 3
console.log(farenheit)

let kelvin = Number(celsius) + 273.5
console.log(kelvin)
window.alert ("A temperatura está " + farenheit + " graus Farenheit e " + kelvin + " graus Kelvin" + "!")

2.
//a)
let quilowatt = prompt("Quanto gastei de luz esse mês?")

let consumo = quilowatt * 0.05
window.alert("Seu consumo foi de " + consumo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

//b)
let quilowatt = prompt("Quanto gastei de luz esse mês?")

let consumo = (quilowatt * 0.05) - 15/100 
window.alert("Seu consumo com 15% de desconto foi de " + consumo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))


3.

//a)
let libra = 20
let kg = libra/2.2046
console.log("20lb. equivalem a " + kg + "kg.")

//b)
let oz = 10.5
kg = oz/35.274
console.log("10.5oz equivalem a " + kg + "kg.")

//c)
let mi = 100
let m = mi/0.00062137
console.log("100mi equivalem a " + m + "m.")

//d)
let ft = 50
m = ft * 3.38
console.log("50ft. equivalem a " + m + "m.")

//e)
let gal = 103.56
let lit = gal/0.26417
console.log("103.56gal equivalem a " + lit + "L.")

//f)
let xic = 450
lit = xic * 0.24
console.log("450 xícaras equivalem a " + lit + "L.")

//g)
ft = prompt ("Quantos pés você quer converter em metros?")
console.log(ft)
m = ft * 3.38
window.alert(ft + "ft. equivalem a " + m + "m.")

