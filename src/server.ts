import express from 'express';
import {routes} from './routes';
import './database';

const app = express();


// GET = buscar
// POST = criação
// PUT = alteração
// DELETE = deletar
// PATCH = alterar uma informação especifica
app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));