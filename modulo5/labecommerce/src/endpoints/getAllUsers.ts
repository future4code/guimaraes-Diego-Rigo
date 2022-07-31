import { Request, Response } from 'express';
import { searchAllUsers } from '../data/searchAllUsers';
import { user } from '../types/user';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400;
    try {

        const users: user[] | null = await searchAllUsers();
        res.status(200).send(users)
        }
  
    catch (error){
        res.status(500).send("error")
        }
}