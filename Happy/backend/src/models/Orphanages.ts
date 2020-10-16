import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';

//Importando o model de imagens.
import Image from   './Image';

//Aqui associa essa classe a tabela que criamos.
@Entity('orphanages')
export default class Orphanages{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    //Relacionando com as imagens.
    @OneToMany(()=> Image, image => image.orphanage, {
        //Tratamento para atualizar as imagens quando eles forem atualizados.
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images:  Image[];

}