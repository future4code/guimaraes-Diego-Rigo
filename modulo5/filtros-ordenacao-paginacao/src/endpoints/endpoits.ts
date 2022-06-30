import {connection} from '../data/connection';

const selectAllUsers = async () : Promise<any> => {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `);

    return result[0];
};



export const getAllUsers = async(req: Request, res: Response): Promise<void> =>{
    try {
        const users = await selectAllUsers();

        if(!users.length){
           // res.statusCode = 404
            console.log(res)
            throw new Error("No users found");
        };

       // res.status(200).send(users);

    } catch (error:any) {
        console.log(error);
      //  res.send(error.message || error.sqlMessage);
    };
};