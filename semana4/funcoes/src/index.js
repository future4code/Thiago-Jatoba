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
//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// function profile(){
//     console.log("Eu sou Thiago, tenho 40 anos, moro em São Paulo e sou programador.")
// } 
// profile()

//b.Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

    let myName = prompt("Qual seu nome?")
    console.log(myName)
    let age = Number(prompt("Qual sua idade?"))
    console.log(age)
    let city = prompt("Qual sua cidade?")
    console.log(city)
    let doYouStudy = "sou"
        if (doYouStudy === true){
        }

function profile (myName, age, city, doYouStudy){
    
}
profile(myName, age, city, doYouStudy)
console.log(`Eu sou ${myName}, tenho ${age} anos, moro em ${city} e ${doYouStudy} estudante.`)

