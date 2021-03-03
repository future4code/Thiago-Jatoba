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

   if(confirm("Quer iniciar uma nova rodada?")) {
      const carta = comprarCarta();
   
      let jogo = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]
      console.log (jogo)

      let cartasUsuario = Number(jogo[0].valor) + Number(jogo[1].valor)
      console.log (cartasUsuario)

      let cartasMaquina = Number(jogo[2].valor) + Number(jogo[3].valor)
      console.log (cartasMaquina)

      console.log("--- RESULTADO ---")
      if (cartasUsuario > cartasMaquina){
         console.log("Computador - cartas: " + jogo[0].texto + jogo[1].texto+ "- pontuação: " + cartasUsuario)
         console.log("Usuário - cartas: " + jogo[2].texto + jogo[3].texto + "- pontuação: " + cartasMaquina)
         console.log("O Computador ganhou!")
         
      } else if (cartasUsuario < cartasMaquina){
         console.log("Computador - cartas: " + jogo[0].texto + jogo[1].texto + "- pontuação: " + cartasUsuario)
         console.log("Usuário - cartas: " + jogo[2].texto + jogo[3].texto + "- pontuação: " + cartasMaquina)
         console.log("O Usuário ganhou!")
      } else{
         console.log("EMPATOU!")
      }

   } else {
	   alert("O jogo acabou!")
}
