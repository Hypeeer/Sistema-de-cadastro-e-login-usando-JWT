import app from './app';

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  const date = new Date();
  const realTime = date.toLocaleString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
  });
  console.log(`🚀 Server runing in port: ${port} / time: ${realTime}`);
});
