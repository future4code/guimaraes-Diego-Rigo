/* Exercícios de interpretação de código

1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    

let a = 10
let b = 10

console.log(b)

RESPOSTA
// 10

b = 5
console.log(a, b)

RESPOSTA
// 10 5



2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

RESPOSTA
//10, 10 ,10



3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes 
para as variáveis. Lembre-se que devemos escolher nomes significativos, 
usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)



RESPOSTA
O programa perguntas horas trabalhadas por dia e quanto recebe, depois ele divide os valores passados
e exibi um alerta com uma mensagem de quantos reais a pessoa recebe por hora.

**Melhors nomes para variáveis


let horasDiarias = prompt("Quantas horas você trabalha por dia?")
let valorDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


*/


// Exercícios de escrita de código

/*1.
//a) Declare uma variável para armazenar um nome, sem atribuir um valor.

let nome 

//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

let idade

//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

console.log(typeof nome, typeof idade)

//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// RESPOSTA
// Foi impresso "undefined" porque esse tipo representa um valor indefinido.


//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt("Qual seu nome?")
idade = prompt("Qual é a sua idade?")


//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

console.log(typeof nome, typeof idade)

//Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log("olá", nome ,"você tem", idade , "anos")

*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------




/*
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    


    //********RESPOSTA***********


    let primeiraPergunta = ("Você é estudante da Labenu?")
    let segundaPergunta = ("já estudou programação antes?")
    let terceiraPergunta =("Está gostando do método de ensino?")


    let respostaUm = prompt(primeiraPergunta)
    let respostaDois = prompt(segundaPergunta)
    let respostaTres = prompt(terceiraPergunta)

    console.log(primeiraPergunta,  respostaUm)
    console.log(segundaPergunta, respostaDois)
    console.log(terceiraPergunta, respostaTres)


*/


3.

let a = 10
let b = 25




// Aqui faremos uma lógica para trocar os valores

c = a 
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:


console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10






