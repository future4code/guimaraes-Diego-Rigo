import { Request, Response } from "express";
import express from 'express';
import cors from 'cors';
import { target } from "./data";

// EXPORTA O APP PARA UTILIZAR NOS OUTROS ARQUIVOS
export const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// EX 1 

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong!");
  });

// EX 4 

app.get("/target", (request: Request, response: Response) => {
  try {
     
     const usuario = request.headers.authorization;
     
     const userSearch = target.find((user) => user.userId === Number(usuario));
     
     if (!userSearch) throw new Error("Usuário não encontrado");
    
     let completed = target.filter((buscar)=>buscar.completed === true)

     response.status(200).send(completed);
  } catch (error: any) {
     response.end(error.message);
  }
});


// SERVIDOR ESCUTANDO NA PORTA 3003
app.listen(3003, () => console.log('Server rodando.....'));


