import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateConnections1619107274747 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'connections',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'admin_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'socket_id',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));

        await queryRunner.createForeignKey("connections", new TableForeignKey({
            name: "fk_connection_user",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
        }));
        await queryRunner.createForeignKey("connections", new TableForeignKey({
            name: 'fk_connection_admin',
            referencedTableName: 'admins',
            referencedColumnNames: ["id"],
            columnNames: ["admin_id"],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('connections','fk_connection_admin');
        await queryRunner.dropForeignKey("connections",'fk_connection_user');
        await queryRunner.dropTable('connections');
    }

}
