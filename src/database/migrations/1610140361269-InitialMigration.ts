import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1610140361269 implements MigrationInterface {
    name = 'InitialMigration1610140361269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "document" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "token" character varying NOT NULL, "stateId" uuid NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "state" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "region" character varying NOT NULL, CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "number" integer NOT NULL, "neighboard" character varying NOT NULL, "city" character varying NOT NULL, "primary" boolean NOT NULL, "stateId" uuid NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "document" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpf" character varying NOT NULL, "rg" integer NOT NULL, "cnh" character varying NOT NULL, "pis" character varying NOT NULL, "title" character varying NOT NULL, "reservist" character varying NOT NULL, CONSTRAINT "PK_e57d3357f83f3cdc0acffc3d777" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "social" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "facebook" character varying NOT NULL, "instagram" character varying NOT NULL, "linkedin" character varying NOT NULL, "github" character varying NOT NULL, CONSTRAINT "PK_645aa1cff2b9f7b0e3e73d66b4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "number" integer NOT NULL, "ddd" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "company" ADD CONSTRAINT "FK_f38156b54f9ba680cda763f70f8" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_1220f0989240d6c0d580a61bd30" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_b04725e0da940da71de7d494580" FOREIGN KEY ("addressIdId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5e4f56509291cd0f3bf07d5f93a" FOREIGN KEY ("documentIdId") REFERENCES "document"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6530f8ceb93f81306e5396384e8" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9bd2fe7a8e694dedc4ec2f666fe" FOREIGN KEY ("socialId") REFERENCES "social"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9bd2fe7a8e694dedc4ec2f666fe"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6530f8ceb93f81306e5396384e8"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5e4f56509291cd0f3bf07d5f93a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_b04725e0da940da71de7d494580"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_1220f0989240d6c0d580a61bd30"`);
        await queryRunner.query(`ALTER TABLE "company" DROP CONSTRAINT "FK_f38156b54f9ba680cda763f70f8"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "social"`);
        await queryRunner.query(`DROP TABLE "document"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "state"`);
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
