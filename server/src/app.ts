import Express  from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = Express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));


app.get('/',(req,res) => {
  res.send('Hello Worlds');
})



app.listen(5003, () => {
  console.log('Listening on port 5003')
})