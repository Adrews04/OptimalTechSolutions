import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend listo');
});

app.listen(port, () => {
  console.log(`Backend listo en el puerto ${port}`);
});