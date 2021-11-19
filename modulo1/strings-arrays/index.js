//===1===

//a.  undefined

//b.  null

//c.  11

//d.  4 

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. 9

//===2===

// SUBI NUM ÔNIBUS EM MIRROCOS 27


//-------------Exercícios de escrita de código--------------

//==1==
let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")


console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`) 


//==2==

//a.


let array = ['pizza',
'hamburguer', 'batata frita', 'coxinha', 'strogonoff']
console.log(array)

//b. 
console.log(' Essas são as minhas comidas preferidas:')
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//c.

let comidaFavorita = prompt("qual a sua comida favorita?")

array[1] = comidaFavorita

console.log(array)





//===3===

//a.

let listaDeTarefas = [];

//b.

let tarefaUm = prompt('Digite a primeira tarefa que realiza no dia')
let tarefaDois =prompt('Digite a segunda tarefa que realiza no dia')
let tarefatres = prompt('Digite a terceira tarefa que realiza no dia')

listaDeTarefas.push(tarefaUm, tarefaDois, tarefatres)

//c.
console.log(listaDeTarefas)

//d.

let tarefaFeita = Number(prompt("Digite o índice de uma tarefa que voê já realizou: 0, 1 ou 2 "))

// e.

let i = tarefaFeita;

listaDeTarefas.splice(i, 1)

//f.
console.log(listaDeTarefas);




