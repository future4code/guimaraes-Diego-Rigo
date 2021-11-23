//==========Exercícios de interpretação de código========

//**1**

//A) 10, 5

// Nada

//**2**

//A) 
/*A função recebe um texto do usuário, o converte em minuscula e retorna um valor booleano se no 
no texto contem ou não a palavra cenoura */

//B) i.true  ii.true iii.false

//=========Exercícios de escrita de código=======

//**1**

//A) 

function sobreMim(){


    console.log("Eu sou Diego, tenho 25 anos, moro em Minas Gerais e sou Certificador de Qualidade.")
}


//B 



function sobreMim2(nome, idade, cidade, profissão){



    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)

}




//**2**

//A)

function soma(num1, num2){
   
    let somar = num1 + num2

    return somar
}

console.log(soma(5, 5))

//B)




function comparar(num1, num2){

    let verifica = num1 >= num2

    return verifica
}





//C) 

function parImpar(num1){

    let imparPar = num1 % 2 === 0

    return imparPar

}


//D) 

function mensagem(string){

    const tamanho = string.length

    let maiscula = string.toUpperCase()

    let juntar = maiscula + " " + tamanho
    
    return juntar

}

console.log(mensagem("Diego"))


//==3==


function soma(num1, num2){

    let somar = num1 + num2

    return somar

}


function subtracao(num1, num2){
    
    let subr = num1 - num2

    return subr
}


function multiplicacao(num1, num2){
    
    let mult = num1 * num2

    return mult 
}



function divisao(num1, num2){
    
    let div = num1 / num2

    return div
}



let num1 = Number(prompt("Digite o primeiro numero:"))
let num2  = Number(prompt("Digite o segundo numero:"))

console.log(soma(num1, num2))

console.log(subtracao(num1, num2))


console.log(multiplicacao(num1, num2))

console.log(divisao(num1, num2))

//////////

console.log("Numeros inseridos", num1, num2)

console.log("soma:", soma(num1, num2))

console.log("Diferença",subtracao(num1, num2) )
console.log("multiplicação:",multiplicacao(num1, num2) )
console.log("divisão:",divisao(num1, num2) )


