// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    let novoArray =[]
    let tamanho = array.length

   for (i = 0; i < tamanho; i++){
    
    let ultimo = array.pop()
    novoArray.push(ultimo)
    
   }
    

return novoArray

   
}
retornaArrayInvertido(array)
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    return array.sort(function(a, b) {
        return a - b;
    });
}

// EXERCÍCIO 04 
function retornaNumerosPares(array) {
    
    let numerosPares = []
    
    for(i of array){
        if (i % 2 === 0){
          numerosPares.push(i)
        }
    }

 return numerosPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
    let numerosPares = []
    
    for(i of array){
        if (i % 2 === 0){
          numerosPares.push(i * i) 
        }
    }

 return numerosPares

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = undefined;
    let menorNumero = undefined;
    let maiorDivisivelPorMenor = undefined;
    let diferenca = undefined;
   

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2
    } else {
        maiorNumero = num2;
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true;
    } else {
        maiorDivisivelPorMenor = false;
    }

    diferenca = maiorNumero - menorNumero

    return {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Equilátero'
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    array.sort(function (a, b) {
        return a - b
    })

    let menor = array[1];
    let maior = array[array.length - 2];
    array = [maior, menor]

    return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    
    let objeto = {
        ...pessoa
    }

    return {
        'nome': "ANÔNIMO",
        'idade': objeto.idade,
        'email': objeto.email,
        'endereco': objeto.endereco
    }

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let autorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizadas = pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    let somaCompras = undefined;
    for (const conta of contas) {
        somaCompras = conta.compras.reduce((soma, i) => {
            soma += i
            return soma
            
        });
        conta.saldoTotal -= somaCompras
        
    
        conta.compras = []
    
        return contas
    }
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    consultas.sort(function(a,b) {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}