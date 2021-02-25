//Exercícios de Leitura de Código

/*1.
const respostaDoUsuario = prompt("Digite o número que você quer testar") 
##Permite ao usuário digitar um número de qualquer valor.

const numero = Number(respostaDoUsuario)
##Armazena a resposta do usuário, permitindo que a "String" seja convertida em "Number" através do Cast. 

if(numero % 2 === 0) {
##A condição estabelece que, se o resto da divisão do número atribuido for estritamente igual a zero, logo a condição é VERDADEIRA.

console.log("Passou no teste.")
##A respota que imprime este dado é para números pares, cuja divisão tem resto zero.

} else {
console.log("Não passou no teste.")
## Esta resposta é dada para qualquer outro número diferente de um numero par.
}*/

2.
/*a. 
Para que serve o código acima?
##Para imprimir o preço das frutas de um estabelecimento numa tela.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
##O valor impresso será o de R$ 2.25.

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
## Se break é a palavra que permite que a execução do código saia do bloco em
questão, logo, o valor de R$5,50 será impresso na tela */

3.
/*a. O que a primeira linha está fazendo?
## Ela está recebendo um valor atribuido pelo usuário, que é "String" por default, mas está sendo transformado em Number através do Cast. 

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
## A mensagem será "Esse número passou no teste" por atender a condição de que o valor atribuido tenha que ser um número positivo.

E se fosse o número -10?
## O console certamente não apresnetará nenhuma resposta, pois não há condição que satisfaça esse valor.

c. Haverá algum erro no console?Justifique usando os conceitos de bloco ou escopo.
## Haverá um erro de defição da variável "mensagem", já que a mesma foi atribuida no escopo bloco filho, e não pode ser acessada pelo bloco pai.
*/

//Exercícios de escrita de código

4.
/*const maioridade = Number(prompt("Digite a sua idade:"))
console.log(maioridade)

    if (maioridade >= 18){
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
*/

5.
/*const turno = prompt("Qual seu turno de estudos: (responda com M, V ou N)")
console.log(turno)

if (turno === "M"){
    console.log ("Você é do turno da Manhã!")
} else if (turno === "T"){
    console.log ("Você é do turno da Tarde!")
} else{
    console.log ("Você é do turno da Noite!")
}*/

6.
/*const turno = prompt("Qual seu turno de estudos: (responda com M, V ou N)")
console.log(turno)

switch (turno) {
    case 'M':
        console.log ("Você é do turno da Manhã!")
        break;
    case 'T':
        console.log ("Você é do turno da Tarde!")
        break;
    case 'N':
        console.log ("Você é do turno da Noite!")
        break;
    default:
        console.log ("Dado Invalido! Digite apenas M, T ou N")
        break;
}*/

7.
/*const genero = prompt("Qual seu gênero de filme favorito")
console.log(genero)

const preco = Number(prompt("Quanto você pode pagar pelo filme?"))
console.log(preco)

if (genero === "fantasia" && preco === 15) {
    console.log ("Bom Filme =D")
} else {
    console.log ("Escolha outro filme!")
}*/

//Desafios

1.

/*let genero = prompt("Qual seu gênero de filme favorito")
console.log(genero)

let preco = Number(prompt("Quanto você pode pagar pelo filme?"))
console.log(preco)

if (genero === "fantasia" && preco === 15) {
    let snack = prompt("Qual snack vc irá comprar?")
    console.log("Bom Filme =D")
    console.log("... com " + snack)
    

} else {
    console.log ("Escolha outro filme!")
}*/

2.

// DADOS INTERNOS APENAS PARA APURAÇÃO

    let nome = prompt("Digite seu nome:")
    console.log (nome)
    
    let tipoJogo = prompt("Qual tipo de Jogo? (digite IN para Internacional e DO para doméstico)")
    console.log (tipoJogo)
    
    let etapaJogo = prompt ("Qual etapa do Campeonato? (digite SF, DT ou FI)")
    console.log (etapaJogo)
    
    let categoria = prompt ("Qual a categoria? (digite 1, 2, 3 ou 4)")
    console.log (categoria)
    
    let quantIngressos = Number( prompt ("Qual a quantidade de ingressos?"))

// DADOS IMPRESSOS

    console.log("---Dados da compra---")

    console.log("Nome do cliente:", nome)

    if (tipoJogo === "IN"){
        console.log("Jogo Internacional")

        } else if (tipoJogo === "DO"){
            console.log("Jogo Doméstico")

        } else {
            console.log("** DADOS INVÁLIDOS ** Ingresso Não Gerado")
        }
    if (etapaJogo == "SF"){
        console.log("Semi-Final")

        } else if (etapaJogo === "DT"){
        console.log("Decisão Terceiro Lugar")

        } else if (etapaJogo == "FI" ){
        console.log("Final")

        } else {
            console.log("** DADOS INVÁLIDOS ** Ingresso Não Gerado")
        }

    console.log("Categoria:", categoria)

    console.log("Quantidade de Ingressos:", quantIngressos)

    console.log("---Valores---")
    
    switch (etapaJogo && categoria){ 
        case "SF" && "1":
            valor = 1320.00
            break
        case "SF" && "2":
            valor = 880.00
            break
        case "SF" && "3":
            valor = 550.00
            break
        case "SF" && "4":
            valor = 220
            break
        case "DT" && "1":
            valor = 660
            break
        case "DT" && "2":
            valor = 440
            break
        case "DT" && "3":
            valor = 330
            break
        case "DT" && "4":
            valor = 170
            break
        case "FI" && "1":
            valor = 1980
            break
        case "FI" && "2":
            valor = 1320
            break
        case "FI" && "3":
            valor = 880
            break
        case "FI" && "4":
            valor = 330
            break
        default:
            valor = String(0) // Não entendo pq esse valor não pega (??)
    }

// RESULTADOS
    if (tipoJogo === "IN"){
        let dollar = valor/4.10
        console.log("Valor do Ingresso:" + dollar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))
        console.log("Valor total: " + (dollar * quantIngressos).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))

    }else {
        console.log("Valor do Ingresso: R$ " + valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        console.log("Valor total: R$ " + (valor * quantIngressos).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
    }
    
    
    
    