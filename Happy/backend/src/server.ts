import express from 'express';

//Import do path para conseguir o caminho para a url das imagens.
import path from 'path';

//Importação para tratamento dos erros.
import 'express-async-errors';

//Fazer a importação da conexão com a database.
import './database/connection';

//Importando as rotas.
import routes from './routes';

import errorHandler from './errors/handler';

import cors from 'cors';


const app = express();


app.use(cors());

//Aqui digo que vou usar Json
app.use(express.json())

//sempre depois express.json.
app.use(routes);

//Caminho para acessar as imagens.
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))


//Faz a msg de erro digitada apareca para o usuário.
app.use(errorHandler);

//Aqui definimos a porta onde ira rodar nosso back.
app.listen(3333);




