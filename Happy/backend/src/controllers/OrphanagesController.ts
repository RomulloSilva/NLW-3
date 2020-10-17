
import {Request, Response} from 'express';

//Para fazer ao insert dos dados na tabela.
import {getRepository} from 'typeorm';

//Chamando o model que está associado a tabela.
import Orphanage from '../models/Orphanages';

//Importando o view
import orphanageView from '../views/orphanages_view';

import * as Yup from 'yup';

export default{
//Listando todos os orfanatos.
    async index( request: Request, response: Response){

        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });

        return response.json(orphanageView.renderMany(orphanages));

    },

//Buscando um orfanato pelo Id.
async show( request: Request, response: Response){

    //Buscando o id. Lembrando que o nome deve ser idêntico ao que se encontra na rota da url.
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail( id, {
        relations: ['images']
    } );

    return response.json(orphanageView.render(orphanage));

},


    //Criando um orfanto.
    async create( request: Request, response: Response ){


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

        //Para salvar as imagens. Junto com a instrução de que é um array de arquivos
        //Quando tiver muitos arquivos usar as Express.Multer.File[];
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image =>{
            return {path: image.filename}
        });
    
        const data ={
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends == 'true',
            images,
        };
//Schema da validação dos dados
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude:  Yup.number().required(),
            about: Yup.string().required().max(300), 
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends:Yup.boolean().required(),
            images:Yup.array(Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        //Validação dos dados
        await schema.validate(data,{
            abortEarly: false,


        })

        const orphanage = orphanagesRepository.create(data );
    
        //Necessário o await para que o código espere esse método ser executado, para isso a função deve ser async.
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }

};