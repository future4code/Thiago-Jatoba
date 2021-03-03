/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 //VARIAVEIS
const carta = comprarCarta()
let pontoMaquina = 0
let pontoUsuario = 0

let jogoMaquina;
let jogoUsuario;

let cartasUsuario = []
let cartasMaquina = []

let valorMenor21 = true


//JOGANDO
if(confirm("Quer iniciar uma nova rodada?")) {

   while (valorMenor21 === true ){

      jogoUsuario = comprarCarta()
      console.log(carta.texto)
      console.log(carta.valor)

      jogoMaquina = comprarCarta()
      console.log(carta.texto)
      console.log(carta.valor)


      if (jogoUsuario.valor < 21 || jogoMaquina.valor < 21 ){ 
      
      pontoUsuario += jogoUsuario.valor
      cartasUsuario.push(jogoUsuario.texto)

      pontoMaquina += jogoMaquina.valor
      cartasMaquina.push(jogoMaquina.valor)

      console.log(`Carta CPU: ${cartasMaquina}, Sua Carta: ${cartasUsuario}`)
      console.log(`Pontos CPU: ${pontoMaquina}, Seus pontos: ${pontoUsuario}`)
      } else { 
         valorMenor21 = false
      } 
      console.log (valorMenor21) 
   }
}