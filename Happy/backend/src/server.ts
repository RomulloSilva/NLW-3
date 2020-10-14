import express from 'express';

//Para fazer ao insert dos dados na tabela.
import {getRepository} from 'typeorm'

//Chamando o model que está associado a tabela.
import Orphanage from './models/Orphanages';

//Fazer a importação da conexão com a database.
import './database/connection';

const app = express();

//Aqui digo que vou usar Json
app.use(express.json())

//Rota = conjunto que faz o método HTTP funcione, ou seja, executado.
//Recurso = é o que o método vai retornar.
//Método HTTP = GET, POST, PUT, DELETE
//Parêmetros = 

//Query Params: http://localhost:3333/users?search=romulo.
//Route Params:   http://localhost:3333/users/1 (Identificador de um recurso)
//Body:  http://localhost:3333/users (Identificar um recurso)
app.post ( '/orphanages',  async (request, response) =>  {

    const {
        name,
	    latitude,
	    longitude,
	    about,
	    instructions,
	    opening_hours,
	    open_on_weekends,
    } = request.body

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
	    latitude,
	    longitude,
	    about,
	    instructions,
	    opening_hours,
	    open_on_weekends,

    })

    //Necessário o await para que o código espere esse método ser executado, para isso a função deve ser async.
    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
 });

//Aqui definimos a porta onde ira rodar nosso back.
app.listen(3333);




