// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}



// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Qual a altura?"))
  let largura = Number(prompt("Qual a largura"))

  let resultado = altura * largura

  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoDeNascimento = Number(prompt("Em que ano você nasceu?"))

  const resultado = anoAtual - anoDeNascimento
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let resultado = peso / (altura * altura)

  return resultado

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt('qual a sua primeira cor favorita?')
  let cor2 = prompt('qual a sua segunda cor favorita?')
  let cor3 = prompt('qual sua terceira cor favorita')

  const cores = [cor1, cor2, cor3]

  console.log(cores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let maiuscula = string.toUpperCase()

  return maiuscula
}



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let valor = custo / valorIngresso

  return valor

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  let primeiraString = string1.length
  let segundaString = string2.length

  return primeiraString == segundaString
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  let ultimo = array[array.length - 1];

  return ultimo


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, arrayInicial) {
  // implemente sua lógica aqui

  arrayInicial = array[0]


  array[0] = array[array.length - 1]

  array[array.length - 1] = arrayInicial

  return array


}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let comparar = string1.toUpperCase() === string2.toUpperCase();

  return comparar
}



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Qual o seu ano de nascimento"))
  const emissaoCarteira = Number(prompt("Qual o ano da emissão da carteira?"))

  //primeiro caso 20 anos e carteira maior que 5 anos

  let idade = anoAtual - anoNascimento
  let dataCarteira = anoAtual - emissaoCarteira


  if (idade <= 20 && dataCarteira >= 5) {
    console.log(true)

  } else if (idade > 50 && dataCarteira >= 15) {
    console.log(true)

  } else if (idade > 20 && idade < 50 && dataCarteira >= 10) {
    console.log(true)
  } else {
    console.log(false)
  }

}





// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  if (ano % 4 === 0 && ano % 100 !== 0) {
    return true
  } else if (ano % 4 !== 0 && ano % 400 === 0) {
    return true
  } else if (ano % 4 === 0 && ano % 400 === 0) {
    return true
  } else {
    return false
  }


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let idade = prompt("Você tem mais de 18 anos?")

  if (idade === "sim") {
    idade = true
  } else {
    idade = false
  }

  let ensino = prompt("Você possui ensino médio completo?")
  if (ensino === "sim") {
    ensino = true
  } else {
    ensino = false
  }

  let periodo = prompt("Você possui ensino médio completo?")

  if (periodo === "sim") {
    periodo = true
  } else {
    periodo = false
  }



  if (idade && ensino && periodo === true) {
    console.log(true)
  } else {
    console.log(false)
  }

}