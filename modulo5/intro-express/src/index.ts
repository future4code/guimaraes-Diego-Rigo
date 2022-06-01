import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//exercicio 1
app.get('/', (request: Request, response: Response) => {
    response.send('Pronto e operante');
});


//exercicio 2

type Data = {
    id: string | number,
    name: string,
    phone: string| number,
    email: string,
    website: string
}

//exercicio 3 

const people:Data[] = [

    {
        id: '1',
        name: 'Juliana',
        phone: '3199998558',
        email: 'juuh@outlook.com',
        website: 'www.juuh.com',
        },
    
    {
        id: '2',
        name: 'Diego',
        phone: '3199998745',
        email: 'diego@outlook.com',
        website: 'www.diego.com',
        },
  
]

//exercicio 4
app.get('/usuarios', (req: Request, res: Response) => {
    res.status(200).send(people.map(user => {
        return {name: user.name}
    }))
}) 

//exercicio 5 

type Post = {
    id: number,
    title: string,
    body: string,
    userId: string
}


//exercicio 6
const postsInfos:Post[] = [
    {
        id: 1,
        title:'Deadpoll',
        body: 'MCU',
        userId: 'D75', 
     },
    
     {
        id: 2,
        title:'Homem aranha',
        body: 'MCU',
        userId: 'G18', 
     }
]
 

//exercicio 7 

app.get('/filmes', (req: Request, res: Response) => {
    res.status(200).send(postsInfos.map(info => {
        return {
            id: info.id,
            title: info.title,
            body: info.body,
            userId: info.userId
        }
    }))
}
)

//exercicio 8

app.get("/post/infos", (req: Request, res: Response) => {


})  


app.listen(3003, () => {
    console.log('Pronto e operante');
 });
