//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
   let novoArray = array
   novoArray.reverse(array)
   return novoArray
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   const novoArray = []
   for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
         novoArray.push(array[i] ** 2)
         console.log(novoArray)
      }
   } 
   return novoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   const novoArray = []
   for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
         novoArray.push(array[i])
         console.log(novoArray)
      }
   } 
   return novoArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero = [0]
      for (let i = 0; i < array.length; i++){
         if (array[i] > maiorNumero){
            maiorNumero = array[i]
            console.log(maiorNumero)
         }
      }
      return maiorNumero 
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   for (let i = 0; i < array.length; i++){
      console.log (array)
      return array.length
   }
} 
//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const resposta = [false, false, true, true, true]
   
   return resposta
} 
//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let novoArray = []
   for(let i = 0; i < n; i++){
         novoArray.push(i * 2)
   }  
   return novoArray
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
   if (a === b && b === c){
      return "Equilátero"
   } else if (a === b || b === c || c === a){
      return "Isósceles"
   } else {
      return "Escaleno"
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let resultado = {
      maiorNumero:'',
      maiorDivisivelporMenor:'',
      diferenca: ''
   }
      if (num1 > num2){
         resultado.maiorNumero = num1
         if (resultado.maiorNumero % 2 === 0){
            resultado.maiorDivisivelporMenor = true
         }else {
            resultado.maiorDivisivelporMenor = false
         }
            resultado.diferenca = resultado.maiorNumero - num2
      } else {
         resultado.maiorNumero = num2
         if (resultado.maiorNumero % 2 === 0){
            resultado.maiorDivisivelporMenor = true
         }else {
            resultado.maiorDivisivelporMenor = false
         }
            resultado.diferenca = resultado.maiorNumero - num1
      }
      return resultado    
}

//Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui

}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: "Domicilío Conjugal",
      ano: 1970,
      diretor: "François Truffaut",
      atores: "Jean-Pierre Léaud, Claude Jade, Daniel Ceccaldi"
   }
   console.log(filme)
   return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: "Domicilío Conjugal",
      ano: 1970,
      diretor: "François Truffaut",
      atores: "Jean-Pierre Léaud, Claude Jade, Daniel Ceccaldi"
   }

   // filme.forEach((estrelando) => {
   //    for(leti = 0; i < filme.atores.length; i++) {
   //       if(i === filme.atores.length - 1) {
   //          estrelando += filme.atores[i]
   //       } else {
   //          estrelando += filme.atores[i] + ", "
   //       }
   //    } 
   // })
   
   //filme = `Venha assistir ao filme ${filme.nome}, lançado em ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${estrelando}.`

   return filme
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
  // implemente sua lógica aqui
   let email
   
   let emailRetorno = consultas.map((paciente) =>{
      let tratamento
      let pronome
      if (paciente.genero === "masculino") {
         tratamento = "Sr."
         pronome = "lo"
      } else{
         tratamento = "Sra."
         pronome = "la"
      }

      if(paciente.cancelada === false){
         email = `Olá, ${tratamento} ${paciente.nome}. Estamos enviando esta mensagem para lembrá-${pronome} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
         console.log(email)
         return email
      } else {
         email = `Olá, ${tratamento} ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
         console.log(email)
         return email
      }
   })
   
   return emailRetorno
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
   contas.forEach((pessoa) => {
      let gastos = 0
      for (i of pessoa.compras){
         gastos += i
      }
      pessoa.saldoTotal -= gastos
   })
   return contas
}