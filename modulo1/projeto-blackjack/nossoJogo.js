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

    // iniciando o Jogo

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada")) {
	
   let primeiraCartapc = comprarCarta()
   let segundaCartaPC = comprarCarta()

   let userCartaUm = comprarCarta()
   let userCartaDois = comprarCarta()

   let pontosPC = primeiraCartapc.valor + segundaCartaPC.valor
   let pontosUser = userCartaUm.valor + userCartaDois.valor

   console.log(`Computador - cartas: ${primeiraCartapc.texto} ${segundaCartaPC.texto} - ${pontosPC}`)
   console.log(`Usuário - cartas: ${userCartaUm.texto} ${userCartaDois.texto} - ${pontosUser}`)

   if (pontosUser > pontosPC) {
      console.log("O usuário ganhou!")
  } else if (pontosPC > pontosUser) {
      console.log("O computador ganhou!")
  } else if (pontosPC === pontosUser) {
      console.log("Empate!")
  }
   
} else {
	console.log("O jogo Acabou")
}

