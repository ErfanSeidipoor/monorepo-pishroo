import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class call1655233048247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "call",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "created_at",
            type: "timestamptz",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamptz",
            isNullable: true,
            default: null,
          },
          {
            name: "description",
            type: "text",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "new_phone",
            type: "varchar",
            length: "15",
            isUnique: false,
            isNullable: false,
          },
          // references
          {
            name: "user_id",
            type: "uuid",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "customer_id",
            type: "uuid",
            isUnique: false,
            isNullable: true,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "call",
      new TableForeignKey({
        columnNames: ["customer_id"],
        referencedTableName: "customer",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "call",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedTableName: "user",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("call");
  }
}
