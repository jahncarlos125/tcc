import {MigrationInterface, QueryRunner} from "typeorm";

export class AddContact1610137956722 implements MigrationInterface {
    name = 'AddContact1610137956722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "number" integer NOT NULL, "ddd" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "contactId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4b815f82ec3577420df61b7b6c5" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4b815f82ec3577420df61b7b6c5"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "contactId"`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
