import { Request, Response } from 'express';
import { products} from '../types/input';
import { generate } from '../service/idGenerator';
import { creatProducts } from '../data/creatProducts';

export const produtosCadastro = async (req: Request, res: Response) : Promise<void> => {
    let errorCode: number = 400;
    try {
        const  { 
                name, 
                price, 
                image_url} = req.body;


        const id: string = generate();

        const products: products = {
            id,
            name,
            price,
            image_url
        };

        await creatProducts(products);

        res.status(200).send();

    } catch (error) {
        res.status(errorCode).send();
    };
};