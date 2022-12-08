import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8001;

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Exercicio + Sessão 08 + Dia 03')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});