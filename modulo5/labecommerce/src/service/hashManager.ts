import dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

export const hash = (plainText: string): string => {
   const cost: number = Number(process.env.BCRYPT_COST);
   const salt: string = bcrypt.genSaltSync(cost);
   const cypherText: string = bcrypt.hashSync(plainText, salt);

   return cypherText;
};

export const compare = (
   plainText: string,
   cypherText: string
): boolean => {
   return bcrypt.compareSync(plainText, cypherText);
}; 