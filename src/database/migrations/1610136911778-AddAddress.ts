import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAddress1610136911778 implements MigrationInterface {
    name = 'AddAddress1610136911778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "number" integer NOT NULL, "neighboard" character varying NOT NULL, "city" character varying NOT NULL, "primary" boolean NOT NULL, "stateId" uuid NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_6f64adba7c1c162c1543d8fff2c" UNIQUE ("addressIdId")`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_1220f0989240d6c0d580a61bd30" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6f64adba7c1c162c1543d8fff2c" FOREIGN KEY ("addressIdId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6f64adba7c1c162c1543d8fff2c"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_1220f0989240d6c0d580a61bd30"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_6f64adba7c1c162c1543d8fff2c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressIdId"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
