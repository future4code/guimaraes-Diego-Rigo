//Exercícios de interpretação de código

//****1***

//A) Matheus Nachtergaele, Virginia Cavendish, canal: Globo, horario: 14h


//***2***

// A) nome: 'Juca', idade: 3, raca: 'SRD'
      //nome: 'Juba', idade: 3, raca: 'SRD'
      //nome: 'Jubo', idade: 3, raca: 'SRD'

// B) Ele copia as informaçoes que foram passadas no objeto referenciado

//***3***

// A) false, undefined, undefined

    //B) Porque os paramentros foram passados incorretamente


//    Exercícios de escrita de código

//***1***

//A)

const pessoa = {
    nome: "Diego", 
    apelidos: ["Dieguin", "Branco", "Macarrão"]
 }


const resultado = () => {
    return(`Eu sou ${pessoa.nome} , mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

resultado(pessoa)

//B)

const pessoaDois = {...pessoa, apelidos: ["Gordo", "Rigo", "jovem"]}


function resultado(pessoaDois) {
   
    console.log(`Eu sou ${pessoaDois.nome} , mas pode me chamar de: ${pessoaDois.apelidos[0]}, ${pessoaDois.apelidos[1]} ou ${pessoaDois.apelidos[2]}`)
}
resultado(pessoaDois)


//***2***

//A) 

const primeiroObjeto = {
    nome: "Diego",
    idade: 25,
    profissão:"Certificador"

}

const segundoObjeto = {
    nome: "emilly",
    idade: 18,
    profissão:"Designer"

}



//B) 

function objeto (primeiro) {

    let array = [];
    array.push(primeiro.nome)
    array.push(array[0].length)
    array.push(primeiro.idade)
    array.push(primeiro.profissão)
    array.push(array[3].length)


    return array

}



//***3***

//A)

let carrinho = [];

//B) 

const fruta1 = {
    nome: "Banana",
    Disponivel: true
}

const fruta2 = {
    nome:"Laranja",
    Disponivel: true
}

const fruta3 = {
    nome: "Uva",
    Disponivel: true
}

//C) 

const adicionarCarrinho = (frutas1, frutas2,frutas3) => {

    carrinho.push(frutas1.nome)
    carrinho.push(frutas2.nome)
    carrinho.push(frutas3.nome)

    return carrinho
}

adicionarCarrinho(fruta1,fruta2,fruta3)
//D)

console.log(carrinho)