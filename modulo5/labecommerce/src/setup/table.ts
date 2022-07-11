import {connection} from '../data/connection';
import { USER_LABECOM, PRODUCT_NAME } from './tableNames';

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
            
            CREATE TABLE ${PRODUCT_NAME} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                price VARCHAR(255) NOT NULL,
                image_url VARCHAR(255) NOT NULL,

        `);

        

        console.log(`'${USER_LABECOM}','${PRODUCT_NAME}'  criada com sucesso"`);

    } catch (error) {
        console.log();
    } finally {
        connection.destroy();
    };
};

createTables();