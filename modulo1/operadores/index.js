//Exercícios de interpretação de código

/*


1

a false
b false
c true
d boolean

2.
// O problema é que ele esta tentando somar duas strings, pois o prompt retorna o valor como string.
// será impresso 22


3.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

// ************************************************************************



//Exercícios de escrita de código

//****1.*****

/*
let idadeUsuario = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

let idadeMaior = idadeUsuario > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", '--', idadeMaior)

console.log("diferença de idade é de", idadeUsuario - idadeAmigo, "anos")

//**** 2. ****

let numeroPar = Number(prompt("insira um numero Par:"))

let restoDivisão = numeroPar % 2

console.log(restoDivisão)

//C - o padrão é que todos os numero pares retornam 0.

//D - Se o numero digitado for impar, o resto retorna 1.



//**** 3. ****

let suaIdade = Number(prompt("Qual a sua idade?"))

console.log("Sua idade em meses", "--",suaIdade * 12, "meses")
console.log("Sua idade em dias", "--",suaIdade * 365, "dias")
console.log("Sua idade em horas", "--",suaIdade * 365 * 24, "horas")

*/

//**** 4. ****

/*

let numeroUm = Number(prompt("Digite um numero:"))
let numeroDois = Number(prompt("Digite outro numero"))


console.log("O primeiro numero é maior que segundo?", "--", numeroUm > numeroDois)
console.log("O primeiro numero é igual ao segundo?", "--", numeroUm === numeroDois)
console.log("O primeiro numero é divisível pelo segundo?", "--", numeroUm % numeroDois === 0)
console.log("O segundo numero é divisível pelo primeiro?", "--", numeroDois % numeroUm ===0)


*/

//1. 

// a
/*

let grauF = 77

let grauK = (grauF -32) *(5/9) + 273.15

console.log(grauK)




// b

let grauC = 80

let grauF = (grauC)*(9/5) +32
console.log(grauF)



//C 

let grauC = 30

let grauF = (grauC)*(9/5) +32 // Grau Fajerehdhe
let grauK = (grauC -32) *(5/9) + 273.15 // Grau kelvin

console.log(grauF)
console.log(grauK)



//D

let grauC = Number(prompt("insira o valor em Celsius"))


let grauF = (grauC)*(9/5) +32 // Grau Fajerehdhe
let grauK = (grauC -32) *(5/9) + 273.15 // Grau kelvin

console.log(grauF)
console.log(grauK)




//***2.***

let quiloConsu = Number(prompt("Quantidade consumida de quilowatts"))

// a

let valorPago = quiloConsu * 0.05
console.log("R$", valorPago)

//b 

let valorDesconto = Number(prompt("Qual o valor de desconto?"))

let desconto = (valorDesconto / 100) * valorPago

console.log(valorPago-desconto)



//**3****

//A

let libra = 20

let valorKilos = libra / 2.2046

console.log("20lb equivalem a", valorKilos)




//B

let oz = 10.5

let kilosOz = oz * 0.0283495 *10
console.log(kilosOz)

*/


// C

let milha = 100

let milhasMetro = milha * 1609.34
console.log(milhasMetro)

// D

let ft = 50

let ftParaM = ft * 0.3048
console.log(ftParaM)

// E

let gal = 103.56

let galparaL = gal * 3.78541
console.log(galparaL)

// F 

let xic = 450

let xicLitros = xic * 0.24
console.log(xicLitros)

// G 

let valoUsuario = Number(prompt("Qual o valor de xícaras?"))
let convertido = valoUsuario * 0.24
console.log(convertido)












 
























