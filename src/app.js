import express from 'express';
import router from './Router/userRouter.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/', router); //rota principal

app.listen(port, () => {
  const date = new Date();
  const realTime = date.toLocaleString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
  });
  console.log(`Server runing in port: ${port} / time: ${realTime}`);
});
