import {connection} from './connection';
import { PRODUCT_NAME } from '../setup/tableNames';
import { products } from '../types/input';

export const creatProducts = async () 
: Promise<products[] | null> => {
    const result = await connection.raw(`
        SELECT ${PRODUCT_NAME}.name, price, image_url
        FROM ${PRODUCT_NAME}
    `)

    return result[0];
};