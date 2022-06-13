import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { listClient } from './data'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (request: Request, response: Response) => {
    response.send('Pronto e operante');
});

//Criar Novo cliente
app.post('/create', (request: Request, response: Response) => {
    try{
        const cliente = listClient.find((u) => u.id);

        const name = request.body.name
        const cpf = request.body.cpf
        const nascimento = request.body.nascimento
        
        const newClient = {
            id: "",
            nome:name,
            cpf: cpf,
            data:nascimento
        }
    cliente.infoCliente.push(newClient);
    response
        .status(201)
        .send(`${newClient.nome}criado com sucesso!`);

    }catch (error:any){
        response.end(error.message)
    }



});

app.listen(3003, () => {
    console.log('Pronto e operante');
 });
