import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

//Importando o model de orfanato.
import Orphanage from './Orphanages'; 

//Aqui associa essa classe a tabela que criamos.
@Entity('images')
export default class image{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    //Relacionamento com orfanato.
    @ManyToOne(()=> Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: "orphanage_id"})
    orphanage: Orphanage;
}