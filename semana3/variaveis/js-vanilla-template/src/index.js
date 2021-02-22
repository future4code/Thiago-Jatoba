//INTERPRETAÇÃO DE CÓDIGO

1. 
/* Atribuindo o mesmo valor para as variáveis 'a' e 'b' com valor 10, o console.log(b) imprimirá o atribuído na primeira variável 'b' (10). Abaixo, con o valor de b reatribuido para 5 o console.log(a, b) imprimirá (10,5).*/

2.
/* São atribuídos a=10 e b=20. Logo, se c = a, então c = 10. Se b = c, então b tem seu valor reatribuido e passa a ser 10. Se a = b, 'a' recebe o valor que lhe foi atribuido primeiro, visto que 'b' teve o valor reatribuído em 10. Sendo assim, console.log(a, b, c) imprimirá (10, 10, 10).*/


//ESCRITA DE CÓDIGO

1.
/* 
a) const myName;
b) let age;

c)  console.log(typeof myName)
    console.log(typeof age) 

d) Para não atribuição de valor, o console mostra a mensagem "Missing initializaer in const declaration". Isso ocorre quando uma declaração const não recebeu um valor na mesma instrução. Ao contrário de var ou let, você deve especificar um valor para uma declaração const.

Caso tivessemos:

let myName;
let age;

console.log(typeof myName)
console.log(typeof age)

---> Ambos os valores seriam undefined.


e)
const myName = prompt('Qual é o seu nome?')
let age = prompt('Qual a sua idade?')
Somente abrindo o prompt, o armazenamento é feito mas não é mostrado.

f)
console.log (`Olá, seu nome é ${myName}, e você tem ${age} anos!`)
Aqui a frase é impressa com os valores atribuidos. */

2.
/*
1. let city = prompt('Qual a sua cidade?')
2. let codeSchool = prompt('Qual é a melhor escola 3. de código do Brasil?')
4. let favLanguage = prompt('Qual sua linguagem de programação favorita?')
5. let work = prompt('Front, Back ou Full Stack?')

console.log (`Moro em ${city}.`)
console.log (`A melhor escola é, sem dúvida, a ${codeSchool}.`)
console.log (`Eu gosto muito de programar em ${favLanguage}!`)
console.log (`Quero ser ${work}!`)
console.log (`O curso termina em ${month}.`)*/

3.
/* 
a) let favFoods = ["Sashimi", "Guacamole", "Churrasco", "Sorvete", "Coxinha"]
console.log (favFoods) */

/* 
b) let favFoods = ["Sashimi", "Guacamole", "Churrasco", "Sorvete", "Coxinha"]
console.log("Minhas comidas favoritas são: "+ favFoods[0]+ "\n"+ favFoods[1] + "\n"+ favFoods[2]+ "\n"+ favFoods[3] + "\n"+favFoods[4])*/

/*
c) let favFood = prompt ("Qual sua comida favorita?")
let favFoods = ["Sashimi", "Guacamole", "Churrasco", "Sorvete", "Coxinha"]
favFoods[1] = favFood
console.log (favFoods)*/

4.
//a)
let questions = ["Você gosta de Rock?", "Seu genero favorito é o Post Punk?", "E vc gosta de Hard Rock?"]
let answers = [true, false, true]

//b)
console.log (questions[0], answers[0])
console.log (questions[1], answers[2])
console.log (questions[2], answers[1])
