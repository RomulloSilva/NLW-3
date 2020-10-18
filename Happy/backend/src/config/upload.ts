//yarn add multer  e também o yarn add @types/multer -D
import { request } from 'express';
import multer from 'multer';

//Importação do path para fazer caminhos relativos.
import path from 'path';

export default {
    //salvando as imagens no disco
    storage: multer.diskStorage({

        //aqui mostro o destino que deve ser salvo as imagens. o __dirname retorna até a pasta atual e depois coloco
        // o caminho para a pasta uploads que criei para salvar na pasta raiz.
        destination: path.join(__dirname, '..', '..', 'uploads'),

        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },
    })
};