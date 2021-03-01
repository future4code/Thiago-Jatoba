//Exercícios de interpretação de código
1.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. O que vai ser impresso no console?
//A multiplicação dos valores atribuidos para o parâmetro "variavel"

// b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Aconteceria dos valores atribuidos por parâmetro terem seus retornos guardados, da mesma maneira vista com o console.log. No console não teriamos nada, visto que a impressão só acontecerá com o comando console.log. 

2.
// let arrayDeNomes = ["Amanda", "Caio"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)


// a. Explicite quais são as saídas impressas no console.
//As saídas serão os índices Darvas e Caio, visto que a função recebe um loop que percorre os índices do Array de 0 à 2. A funçao outraFunção guardará os valores do arrayDeNomes.

// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console? 
// Os dois nomes seriam impressos pois obedecem à condição estabelecida no Laço "for".

3.
//O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

// A função recebe "arrayFinal" vazio, que irá obedecer o comando de preencher esse array com o quadrado dos números (índices) que forem pares. Poderiamos trocar o nome ""metodo" por "numerosParesAoQuadrado", por exemplo.

// const numerosParesAoQuadrado = (array) => {
//     let arrayFinal = [];
  
//     for (let i of array) {
//           if (i % 2 === 0) {
//           arrayFinal.push(i * i)
//           }
//     }
  
//     return arrayFinal;
//   }
// numerosParesAoQuadrado (arrayFinal)


4.
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// function profile(){
//     console.log("Eu sou Thiago, tenho 40 anos, moro em São Paulo e sou programador.")
// } 
// profile()

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

//     let myName = prompt("Qual seu nome?")
//     console.log(myName)
//     let age = Number(prompt("Qual sua idade?"))
//     console.log(age)
//     let city = prompt("Qual sua cidade?")
//     console.log(city)
//     let doYouStudy = "sou"
//         if (doYouStudy === true){
//         }

// function profile (myName, age, city, doYouStudy){
    
// }
// profile(myName, age, city, doYouStudy)
// console.log(`Eu sou ${myName}, tenho ${age} anos, moro em ${city} e ${doYouStudy} estudante.`)


5.
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaNumeros(n1, n2) {
//     const soma = n1 + n2
//     console.log(soma)
    
// }
// somaNumeros(7, 9)

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function maiorOuIgual(n1, n2){ 
//     if (n1 >= n2){
//         console.log (true)
//     }else{
//         console.log (false)
//     }
// }
// maiorOuIgual(2, 2)
// maiorOuIgual(2, 3)
// maiorOuIgual(3, 2)

//c) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

// let frase = "Esta frase se repete 10 vezes"

// function mensagemRepetida(lista){
//     for(let frase of lista){
//         frase * 10
//         console.log(lista)
//     } 
// }
// mensagemRepetida(frase)// esta repetida 29 vezes! Porque??

//Segunda tentativa, com a ajuda dos colegas da turma:

// function mensagem (mensagemRepetida) {
//     for (let i = 0; i < 10; i++) {
//         console.log ("Esta frase se repete 10 vezes")
//     }
// }
// mensagem()

6.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
console.log(array)

//a) Escreva uma função que receba um array de números e devolva a quantidade de elementos nele.

// function numeros (listaNumeros){
//     for(let i=0; i<array.length; i++){
//         console.log(array.length)
//     }
//     return listaNumeros
// }
// numeros()

//b) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

// function numerosPares (listaNumeros){
//     for(let i=0; i<array.length; i++){
//         if (array[i] %2 === 0){
//             console.log(array[i] = true)
//         }else {
//             console.log (array[i] = false)
//         }
//     } return listaNumeros
// }
// numerosPares()

//c) Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele:

// function numerosPares (listaNumeros){
//     for(let i=0; i<array.length; i++){
//         if (array[i] %2 === 0){
//             console.log(array[i])
//         }else {
//         }
//     } return listaNumeros
// }
// numerosPares()

//d) Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

function numerosPares (listaNumeros){
    for(let i=0; i<array.length; i++){
        if (array[i] %2 === 0 && true){
            console.log(array[i])
            }else {
            }
    } return listaNumeros
}
    numerosPares()