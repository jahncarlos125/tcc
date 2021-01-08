import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSocial1610138434394 implements MigrationInterface {
    name = 'AddSocial1610138434394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "social" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "facebook" character varying NOT NULL, "instagram" character varying NOT NULL, "linkedin" character varying NOT NULL, "github" character varying NOT NULL, CONSTRAINT "PK_645aa1cff2b9f7b0e3e73d66b4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "socialId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_2025eaefc4e1b443c84f6ca9b2b" FOREIGN KEY ("socialId") REFERENCES "social"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_2025eaefc4e1b443c84f6ca9b2b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "socialId"`);
        await queryRunner.query(`DROP TABLE "social"`);
    }

}
