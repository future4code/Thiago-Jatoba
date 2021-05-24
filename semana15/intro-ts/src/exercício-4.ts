
// a) Para gerar um arquivo javascript a partir do arquivo typescript com o código abaixo, executamos o comando 'tsc'no terminal.
// b) Poderíamos gerar mudando propriedades dentro do tsconfig.jason
// c) Sim, podemos usar o comando tsc seguido de vários arquivos, colocando seus nomes separados por espaço.
// d) As configurações aqui não são as orientadas durante a aula, tb não esta atualizada com ES6, e sim ES5, o que pode melhorar a compatibilidade mas diminui a performance, certo?! De resto, muitos termos que não entendo exatamente, mas que conheço de certa maneira. 

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}