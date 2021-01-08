import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDocument1610137220637 implements MigrationInterface {
    name = 'AddDocument1610137220637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "document" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying NOT NULL, "rg" integer NOT NULL, "cnh" character varying NOT NULL, "pis" character varying NOT NULL, "title" character varying NOT NULL, "reservist" character varying NOT NULL, CONSTRAINT "PK_e57d3357f83f3cdc0acffc3d777" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "documentIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_c46cb539fa9086ab2a60f28d2fe" UNIQUE ("documentIdId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_c46cb539fa9086ab2a60f28d2fe" FOREIGN KEY ("documentIdId") REFERENCES "document"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_c46cb539fa9086ab2a60f28d2fe"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_c46cb539fa9086ab2a60f28d2fe"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "documentIdId"`);
        await queryRunner.query(`DROP TABLE "document"`);
    }

}
