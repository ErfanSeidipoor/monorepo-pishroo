import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class product1655219100808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
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
            name: 'name',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'slug',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'is_active',
            type: 'boolean',
            isNullable: true,
            default: true,
          },
          {
            name: 'text',
            type: 'text',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'size',
            type: 'integer',
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    /* -------------------------------------------------------------------------- */
    /*                                   review                                   */
    /* -------------------------------------------------------------------------- */

    await queryRunner.createTable(
      new Table({
        name: 'product_review',
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
            name: 'reviewer',
            type: 'varchar',
            length: '100',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'text',
            type: 'text',
            isUnique: false,
            isNullable: true,
          },
          {
            name: 'is_active',
            type: 'boolean',
            isNullable: true,
            default: true,
          },
          {
            name: 'product_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'product_review',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    /* -------------------------------------------------------------------------- */
    /*                                  category;                                 */
    /* -------------------------------------------------------------------------- */

    await queryRunner.createTable(
      new Table({
        name: 'category',
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
            name: 'name',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
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

    await queryRunner.createTable(
      new Table({
        name: 'product_category',
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
          // references
          {
            name: 'product_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'category_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'product_category',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'product_category',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedTableName: 'category',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    /* -------------------------------------------------------------------------- */
    /*                                  property                                  */
    /* -------------------------------------------------------------------------- */

    await queryRunner.createTable(
      new Table({
        name: 'property',
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
            name: 'name',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'unit',
            type: 'enum',
            enum: ['weight_kilogram', 'height_meter'],
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

    await queryRunner.createTable(
      new Table({
        name: 'product_property',
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
            name: 'value',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          // references
          {
            name: 'product_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'property_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'product_property',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'product_property',
      new TableForeignKey({
        columnNames: ['property_id'],
        referencedTableName: 'property',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    /* -------------------------------------------------------------------------- */
    /*                                    color                                   */
    /* -------------------------------------------------------------------------- */

    await queryRunner.createTable(
      new Table({
        name: 'color',
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
            name: 'name',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'value',
            type: 'char',
            length: '6',
            isUnique: true,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: 'product_color',
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
          // references
          {
            name: 'product_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'color_id',
            type: 'uuid',
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'product_color',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'product_color',
      new TableForeignKey({
        columnNames: ['color_id'],
        referencedTableName: 'color',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_color');
    await queryRunner.dropTable('color');
    await queryRunner.dropTable('product_property');
    await queryRunner.dropTable('property');
    await queryRunner.dropTable('product_category');
    await queryRunner.dropTable('category');
    await queryRunner.dropTable('product_review');
    await queryRunner.dropTable('product');
  }
}
