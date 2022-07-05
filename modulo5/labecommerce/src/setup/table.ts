import {connection} from '../data/connection';
import { USER_LABECOM } from './tableNames';

const createTables = async () => {
    try {
        await connection.raw(`
            CREATE TABLE ${USER_LABECOM} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role enum('NORMAL','ADMIN') DEFAULT 'NORMAL'
            );
            
          
        `);

        console.log(`'${USER_LABECOM}' criada com sucesso"`);

    } catch (error) {
        console.log();
    } finally {
        connection.destroy();
    };
};

createTables();