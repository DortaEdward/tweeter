import dotenv from 'dotenv';
dotenv.config();

type Env = {
  PORT: string,
  DB_URL: string,
}

export default<Env> {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL
}


