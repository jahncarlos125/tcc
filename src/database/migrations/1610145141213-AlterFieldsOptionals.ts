import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterFieldsOptionals1610145141213 implements MigrationInterface {
    name = 'AlterFieldsOptionals1610145141213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "token" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "cnh" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."cnh" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "pis" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."pis" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."title" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "reservist" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."reservist" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "facebook" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."facebook" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "instagram" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."instagram" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "linkedin" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."linkedin" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "github" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."github" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6530f8ceb93f81306e5396384e8"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9bd2fe7a8e694dedc4ec2f666fe"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "contactId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."contactId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "socialId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."socialId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6530f8ceb93f81306e5396384e8" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9bd2fe7a8e694dedc4ec2f666fe" FOREIGN KEY ("socialId") REFERENCES "social"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9bd2fe7a8e694dedc4ec2f666fe"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6530f8ceb93f81306e5396384e8"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."socialId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "socialId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."contactId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "contactId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9bd2fe7a8e694dedc4ec2f666fe" FOREIGN KEY ("socialId") REFERENCES "social"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6530f8ceb93f81306e5396384e8" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."github" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "github" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."linkedin" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "linkedin" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."instagram" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "instagram" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "social"."facebook" IS NULL`);
        await queryRunner.query(`ALTER TABLE "social" ALTER COLUMN "facebook" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."reservist" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "reservist" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."title" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."pis" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "pis" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "document"."cnh" IS NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "cnh" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "company"."token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "token" SET NOT NULL`);
    }

}
