import { getConnection } from './BaseDatabase';
import { USER_TABLE } from './tableName';

const connection = getConnection();
const criarTabela = async () => {
    try {
        await connection.raw(`
            CREATE TABLE User_Arq(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM ("ADMIN", "NORMAL") DEFAULT "NORMAL"
            );
        `);

        console.log(`'${USER_TABLE}' tabela criada com sucesso"`);

    } catch (error:any) {
        console.log(error.message || error.sqlMessage);
    } finally {
        connection.destroy();
    };
};

criarTabela(); 