// Exercícios de interpretação de código
1.
/*O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0 // criação de varável com valor zero
for(let i = 0; i < 5; i++) {// uso do laço para indicar a condição de continuação que conta com a variável auxiliar 0, cessará na quinta vez e, por fim, a incrementação.
  valor += i // declaração realizada pela condição de 
}
console.log(valor)// Ao imprimirmos, a variável valor iniciará em 0, como indicado na declaração da mesma, e repetira pelos valores 0, 1, 3, 6 e 10.*/

2.
/*a. O que vai ser impresso no console?

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]// array com lista de números
for (let numero of lista) {//O loop for...of percorre a lista chamando uma função personalizada com instruções que serão executadas para o valor de cada objeto distinto.
  if (numero > 18) { // declaração que fará exibir da lista do array todos os números que forem maiores que 18.
		console.log(numero)//Imprime os números 19, 21, 23, 25, 27, 30 a partir da sexta verificação na declaração. 
	}
}

b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Acredito que seria suficiente já que o loop 'for...of' percorre objetos iterativos, chamando uma função personalizada com instruções que são executadas para o valor de cada objeto.O protocolo iterável permite que objetos JavaScript definam ou personalizem seu comportamento, como valores em um loop do construtor for..of.*/

//Exercícios de escrita de código

3.
//a)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/* for(let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i])
    } */

//b)
/* let divisao = []
for (let i = 0; i < arrayOriginal.length; i++){
        divisao = arrayOriginal[i] / 10
        console.log (divisao)
} */


//c)
/* let arrayPares = []

for(let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] %2 === 0){
        arrayPares.push(arrayOriginal[i])
    }
}
console.log(arrayPares) */

/* let maiorNumero = [0]
let menorNumero = arrayOriginal[0]

    for(let i = 0; i < arrayOriginal.length; i++){
        if (arrayOriginal[i] > maiorNumero) {
            maiorNumero = arrayOriginal[i]
        } else if (arrayOriginal[i] < menorNumero){
            menorNumero = arrayOriginal[i]
        }
    }
console.log ("O maior número do array é: " + maiorNumero)
console.log ("O menor número do array é: " + menorNumero) */