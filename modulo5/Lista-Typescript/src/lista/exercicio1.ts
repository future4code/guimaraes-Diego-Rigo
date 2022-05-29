//Exercício 1 
const dados = (nome:string, data:string) => {
    const separar:string[] = data.split('/');
    const dia:string = separar[0];
    const mes:string = separar[1];
    const anos:string = separar[2];
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${anos}`;
};
console.log(dados("Diego", "24/03/1996"));