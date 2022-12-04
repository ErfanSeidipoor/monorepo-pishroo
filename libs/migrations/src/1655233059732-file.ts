import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class file1655233059732 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'file',
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
            name: 'encoding',
            type: 'varchar',
            length: '15',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'mimetype',
            type: 'varchar',
            length: '100',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'destination',
            type: 'varchar',
            length: '30',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'filename',
            type: 'varchar',
            length: '200',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'path',
            type: 'varchar',
            length: '200',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'size',
            type: 'integer',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'is_used',
            type: 'boolean',
            isNullable: true,
            default: false,
          },
          // references
          {
            name: 'user_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'file',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedTableName: 'user',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createTable(
      new Table({
        name: 'file_use',
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
            name: 'is_active',
            type: 'boolean',
            isNullable: true,
            default: true,
          },
          {
            name: 'is_public',
            type: 'boolean',
            isNullable: true,
            default: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['rejected', 'accepted', 'pending'],
            isNullable: false,
          },
          {
            name: 'type',
            type: 'enum',
            enum: [
              'product',
              'product_reviewer',
              'project',
              'project_reviewer',
              'transporter',
              'transporter_action',
              'producer',
              'producer_action',
              'event_action',
              'customer_action',
              'call',
            ],
            isNullable: false,
          },
          // references
          {
            name: 'file_id',
            type: 'uuid',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'product_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'product_review_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'project_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'project_review_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'transporter_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'transporter_action_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'producer_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'producer_action_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'event_action_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'customer_action_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'call_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'product_reviewer_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'project_reviewer_id',
            type: 'uuid',
            isUnique: false,
            isNullable: true,
          },
        ],
      }),
      true
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['file_id'],
        referencedTableName: 'file',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['product_reviewer_id'],
        referencedTableName: 'product_review',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['project_id'],
        referencedTableName: 'project',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['project_reviewer_id'],
        referencedTableName: 'project_review',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['transporter_id'],
        referencedTableName: 'transporter',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['transporter_action_id'],
        referencedTableName: 'transporter_action',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['producer_id'],
        referencedTableName: 'producer',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['producer_action_id'],
        referencedTableName: 'producer_action',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['event_action_id'],
        referencedTableName: 'event_action',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['customer_action_id'],
        referencedTableName: 'customer_action',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'file_use',
      new TableForeignKey({
        columnNames: ['call_id'],
        referencedTableName: 'call',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('file_use');
    await queryRunner.dropTable('file');
  }
}
