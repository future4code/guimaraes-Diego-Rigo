import {connection} from './connection';
import { USER_LABECOM } from '../setup/tableNames';
import { user } from '../types/user';

export const searchAllUsers = async () 
: Promise<user[] | null> => {
    const result = await connection.raw(`
        SELECT ${USER_LABECOM}.id, name
        FROM ${USER_LABECOM}
    `)

    return result[0];
};