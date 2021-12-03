//Exercícios de interpretação de código

//1)

 //A)
 /*
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }

  
 */

//2 - a) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3 - A) ['Laura' , 'mandi']



// 

//1)

//A)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const petsFiltro = pets.map((nomes)=> {
    return nomes.nome
 })

 console.log(petsFiltro)

//B)

const petsRaca = pets.filter((raca)=> {

    if(raca.raca === "Salsicha"){
        return true
    }else{
        return false
    }
 })

 console.log(petsRaca)

//C)

const petsMensagem = pets.filter((raca)=> {
    if(raca.raca === "Poodle"){
       console.log('Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!')
        return true
    }

 })

 console.log(petsMensagem)


//***2*** 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //A)

 const nomeProdutos = produtos.map((nomes)=> {
    return nomes.nome

 })

 console.log(nomeProdutos)

 //B)

 const produtosCompras = produtos.filter((produto) => {
    return produto.preco
});
const produtosComprasFinal = produtos.map((produto) => {
    let produtosNome = produto.nome;
    let produtosPreco = produto.preco ;

    return produtosNome, produtosPreco


});

console.log(produtosComprasFinal)

const desconto = {...produtos}

// D)

const produtosBebidas = produtos.filter((produto) => {
    return produto.categoria.toLowerCase() === "bebidas";
});

const nomesBebidas = produtosBebidas.map((produto) => {
    return produto.nome;
});

console.log(nomesBebidas);

