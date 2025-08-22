import express from 'express';
import router from './Router/userRouter.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router); //rota principal

app.listen(process.env.PORT, () => {
  const date = new Date();
  const realTime = date.toLocaleString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
  });
  console.log(`🚀 Server runing in port: ${port} / time: ${realTime}`);
});
