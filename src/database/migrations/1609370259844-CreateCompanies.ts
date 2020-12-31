import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCompanies1609370259844
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'company_id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'company_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'company_document',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'company_email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'company_password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'company_token',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
