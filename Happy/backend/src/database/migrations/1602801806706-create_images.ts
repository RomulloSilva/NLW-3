import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602801806706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
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
                    name: 'path',
                    type: 'varchar',

                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                }
            ],
            //Chaves estrangeiras.
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    //Tratamento para atualizações no id do orfanato.
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('images');
    }

}
