import express from 'express';
import router from './Router/userRouter.js';

const app = express();

app.use(express.json());
app.use('/api', router); //rota principal

export default app;
