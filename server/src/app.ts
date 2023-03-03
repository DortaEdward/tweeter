import Express  from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import env from './utils/env';

import connectDB from './utils/db';

import api from './api';

const app = Express();

const PORT = env.PORT;

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));


app.get('/',(req,res) => {
  res.send('Hello Worlds');
})

app.use('/api',api);

app.listen(PORT, async () => {
  console.log(`Listening at http://localhost:${PORT}`)
  try {
    await connectDB();
  } catch (error: any) {
    console.error(error.message);
  }
})