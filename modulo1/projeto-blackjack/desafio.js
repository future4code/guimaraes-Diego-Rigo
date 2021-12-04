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

console.log("Boas vindas ao jogo de Blackjack!")

let usuario = []
let pc = []

if(confirm("Quer iniciar uma nova rodada")) {

   // Verificar se as duas iniciis nao são Ases
   // A = 11
   let verificarCartas = false // ele não ira sair do loop enquanto aqui não for true

   while (verificarCartas === false){
      pc.push(comprarCarta())
      pc.push(comprarCarta())
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())

      if ((usuario[0].valor === 11 && usuario[1].valor === 11) ||
         (pc[0].valor === 11 && pc[1].valor === 11)) {
            pc = []
            usuario = []
      } else {
         verificarCartas = true
      }
   }
    
      
      // Confirmar se o usuario quer mais cartas
      let comprarMais = true

      while(comprarMais){
         let textos = ""
         let pontos = 0
         for (let carta of usuario){
            textos += carta.texto + " "
            pontos += carta.valor
         }

         // Mostrar Primeira carta do PC
         if (pontos > 21){
            comprarMais = false
         } else {
            let confirmCompra = confirm(
               `Suas cartas são ${textos}. A carta revelada do computador é ${pc[0].texto}.` + 
               "\n"+ 
               "Deseja comprar mais uma carta?")
         
            if (confirmCompra){
               usuario.push(comprarCarta())
            } else {
               comprarMais = false
            }
         }
      }
      
      // calcular Pontos
      
      let pontosPc = 0
      let pontosUsuario = 0
      let textosPc = ""
      let textosUsuario = ""
      
      for (let carta of pc){
         pontosPc += carta.valor
         textosPc += carta.texto + " "
      }

      for (let carta of usuario){
         pontosUsuario += carta.valor
         textosUsuario += carta.texto + " "
      }


   // Calcular Vencedor!      
      

   let resultado = ""
      if (pontosUsuario > pontosPc && pontosUsuario <= 21){
         resultado = "O usuário ganhou!"
      } else if (pontosPc > pontosUsuario && pontosPc <= 21){
         resultado = "O computador ganhou!"
      } else if (pontosPc > 21 && pontosUsuario <= 21){
         resultado = "O usuário ganhou!"
      } else if (pontosUsuario > 21 && pontosPc <= 21){
         resultado = "O computador ganhou!"
      } else {
         resultado = "Empate!"
      }


   console.log(`Usuario - Cartas: ${textosUsuario} - Pontuação: ${pontosUsuario}`)
   console.log(`Computador - Cartas: ${textosPc} - Pontuação: ${pontosPc}` )
   console.log(resultado)
      

    } else {
       console.log("O jogo acabou.")
    }
