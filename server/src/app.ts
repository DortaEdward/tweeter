import Express  from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { PORT } from './utils/env';

const app = Express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));


app.get('/',(req,res) => {
  res.send('Hello Worlds');
})



app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})