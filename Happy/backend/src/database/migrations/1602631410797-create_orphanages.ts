import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602631410797 implements MigrationInterface {

    //Tem a função de realizar alterações, como crair ou deletar um campo e tabelas.
    public async up(queryRunner: QueryRunner): Promise<void> {

        //Criando uma tabela
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    //Não pode ser negativa.
                    unsigned: true,
                    //Define como  chave primaria.
                    isPrimary: true,
                    //Será gerada automaticamente.
                    isGenerated: true,
                    //sera gerada automaticamente com uma lógica incremental.
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "about",
                    type: 'text',
                },
                {
                    name: "instructions",
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: "open_on_weekends",
                    type: 'boolean',
                    default: false,
                }
            ]
        }))
    }


    //Desfaz o que foi feito na função UP
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages')
    }

}
