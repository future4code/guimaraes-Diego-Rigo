import connection from './connection';
import { v4 as uuidv4 } from 'uuid';

const populateUserTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email) VALUES 
            (
                '${uuidv4()}',
                'Astrodev',
                'astrodev',
                'astrodev@gmail.com'
            ),
            (
                '${uuidv4()}',
                'Diego',
                'diegorigo',
                'riri@gmail.com'
            ),
            (
                '${uuidv4()}',
                'mashcal',
                'mashcal',
                'moreira@outlook.com'
            );
        `);

        console.log('3 users inserted to get you started!');
        connection.destroy();        
    } catch (error:any) {
        console.log(error.sqlMessage || error.message);
    };
};

populateUserTable(); 
 38  