//Exercícios de interpretação de código

//***1***
// resposta: 10

//***2***

// resposta : A) 19, 21, 23, 25, 27, 30
//            B) Não


// ***3***

// resposta : 3


//Exercícios de escrita de código

//***1***

let pet = Number(prompt("quantos bichinhos de estimação você tem?"))

let arrayPet = []

if(pet > 0){

    for(let i =0; i < pet; i++){
        let petNome = prompt("Digite o nome do seu pet")
        arrayPet.push(petNome)
    }
    }else{
    console.log("Que pena! Você pode adotar um pet!")
}

console.log(arrayPet)

//***2***

//A )

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let array = ''

const valorArray = (arrayOriginal) => {
    
    for(let i in arrayOriginal){
       console.log(arrayOriginal[i])
    }
    
}
valorArray(arrayOriginal)

// B )

const dividirArray = (arrayOriginal) => {
    
    for(let i in arrayOriginal){
        console.log(arrayOriginal[i] / 10)
    }
    console.log(array)
}
dividirArray(arrayOriginal)

// C ) 


let arrayPares = []
const paresArray = (arrayOriginal) => {
    

    for(let i in arrayOriginal){
       
        if(arrayOriginal[i] % 2 === 0){
            let pares = arrayOriginal[i]
            arrayPares.push(pares)
            
        }

        
    }
}
paresArray(arrayOriginal)
console.log(arrayPares)

// D )

let arrayString = []
const valorArray = (arrayOriginal) => {
    
    for(let i in arrayOriginal){
        let string = 'O elemento do índex '+ i + ' é ' + arrayOriginal[i]
        arrayString.push(string)
        
    }
    
}
valorArray(arrayOriginal)
console.log(arrayString)



//E)

let valorMaximo = Math.max(...arrayOriginal)
let valorMinimo = Math.min(...arrayOriginal)
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)


