import { Router } from 'express';

//importando o controller;
import OrphanagesController from './controllers/OrphanagesController';

//Importando o multer
import multer from 'multer';
//Importando o upload.
import uploadConfig from './config/upload';


const routes = Router();

const upload = multer(uploadConfig);

//Rota = conjunto que faz o método HTTP funcione, ou seja, executado.
//Recurso = é o que o método vai retornar.
//Método HTTP = GET, POST, PUT, DELETE
//Parêmetros = 

//Query Params: http://localhost:3333/users?search=romulo.
//Route Params:   http://localhost:3333/users/1 (Identificador de um recurso)
//Body:  http://localhost:3333/users (Identificar um recurso)
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

//Upload.array permite carregar vários arquivos, nesse caso imagens.
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;