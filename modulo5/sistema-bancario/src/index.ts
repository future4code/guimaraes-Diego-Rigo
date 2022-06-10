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


app.listen(3003, () => {
    console.log('Pronto e operante');
 });
