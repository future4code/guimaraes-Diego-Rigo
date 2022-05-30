enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type FILMES = {
    titulo:string,
    lançamento:string,
    genêro:string,
    crítica?:number | string
}

const tituloFilme = (título:string,lançamento:string,genêro:string,crítica:number):FILMES =>{
    const ab:FILMES = {
        titulo: título,
        lançamento: lançamento,
        genêro: genêro,
        crítica:crítica
    }

    return ab
}

const Deadpool:FILMES ={
    titulo:"Deadpool",
    lançamento: '2019',
    genêro: GENERO.COMEDIA,
    crítica: 8.9
}

console.log(tituloFilme("Deadpool","2019",GENERO.DRAMA,8.9))