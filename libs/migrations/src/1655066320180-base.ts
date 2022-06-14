import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class base1655066320180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamptz',
            isNullable: true,
            default: null,
          },
          {
            name: 'username',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'role',
            type: 'enum',
            enum: [
              'supper_admin',
              'employee',
              'admin_website',
              'admin_product',
              'admin_transporter',
              'admin_producer',
              'admin_event',
            ],
            isArray: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '250',
            isNullable: true,
          },
          {
            name: 'is_active',
            type: 'boolean',
            isNullable: true,
            default: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
