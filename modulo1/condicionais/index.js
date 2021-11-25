// ####### Exercícios de interpretação de código ########

//***1*** 

//A) O codigo recebe um numero do usuario e ele teste para verificar se o numero é par.

//B) Para numero pares

//C) Para numeros Impares

//****2****

//A) Para consultar o valor da fruta

//B) O preço da fruta  Maça é R$ 2.25

// O preço da fruta  Pêra  é  R$  5

//*****3****

//A) ela está recebendo um valor do usuario e sendo convertida em Number e sendo armazenada na variavel

//B)  se for 10,Esse número passou no teste. Se for -10 nãos era exibida nenhuma mensagem

//C) Sim, a variavel "mensagem" foi declcarada dentro do escopa das condicionais, então não podemos acessar 
//ela no escopo global


//######### Exercícios de escrita de código ##########

//***1)***

//A)
//B)

let idade = Number(prompt("Qual é a sua idade?"))

if (idade=> 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

//***2***

let periodo = prompt("Você estuda em qual periodo do dia? (M (matutino) ou V (Vespertino) ou N (Noturno))").toLocaleLowerCase();


if (periodo =="m"){
    console.log("Bom dia!")
}else if(periodo == "v"){
    console.log("Boa tarde!")
}else if(periodo == "n"){
    console.log("Boa noite!")
}else{
    alert("Digite o valor correspondente!")
}


//***3***

const horario =  prompt("Você estuda em qual periodo do dia? (M (matutino) ou V (Vespertino) ou N (Noturno))").toLocaleLowerCase();

switch (horario) {
    case 'm':
      console.log('Bom dia!');
      break;
    case 'v':
      console.log('Boa tarde!');
      break;
      case 'n':
        console.log('Boa noite!');
        break;
    default:
      console.log(`Digite o valor correspondente`);
  }



//***4****

let genero = prompt("Qual o gênero do filme?").toLocaleLowerCase()
let preco = Number(prompt("Ate qual valor quer pagar?"));

if(genero == "fantasia" && preco <= 15){
    console.log("Bom filme!");
}else{
    console.log("Escolha outro filme :(");
}