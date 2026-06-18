import { config } from 'dotenv';
config();

const dbConfig = {
  url: process.env.DB_URL,
  name: 'productosDB'
};

export default dbConfig;