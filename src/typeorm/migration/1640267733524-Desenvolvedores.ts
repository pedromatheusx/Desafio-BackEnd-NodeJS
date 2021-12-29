import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Desenvolvedores1640267733524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "desenvolvedores",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "nivel",
                    type: "uuid"
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "sexo",
                    type: "char"
                },
                {
                    name: "datanascimento",
                    type: "timestamp"
                },
                {
                    name: "idade",
                    type: "int"
                },
                {
                    name: "hobby",
                    type: "varchar"
                }
            ],
            foreignKeys: [
                {
                    name: "FKNivelDev",
                    referencedTableName: "niveis",
                    referencedColumnNames: ["id"],
                    columnNames: ["nivel"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("desenvolvedores")
    }

}
