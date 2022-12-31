import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class producer1655230597460 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "producer",
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
            name: "name",
            type: "varchar",
            length: "50",
            isUnique: false,
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            length: "20",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "50",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            length: "256",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "is_active",
            type: "boolean",
            isNullable: true,
            default: true,
          },
          {
            name: "city_id",
            type: "uuid",
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "producer",
      new TableForeignKey({
        columnNames: ["city_id"],
        referencedTableName: "city",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "producer_agent",
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
            name: "first_name",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "last_name",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "50",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "phone",
            type: "varchar",
            length: "20",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "is_active",
            type: "boolean",
            isNullable: true,
            default: true,
          },
          {
            name: "producer_id",
            type: "uuid",
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "producer_agent",
      new TableForeignKey({
        columnNames: ["producer_id"],
        referencedTableName: "producer",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "producer_action",
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
            name: "text",
            type: "text",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "is_active",
            type: "boolean",
            isNullable: true,
            default: true,
          },
          {
            name: "producer_id",
            type: "uuid",
            isUnique: false,
            isNullable: false,
          },
          {
            name: "producer_agent_id",
            type: "uuid",
            isUnique: false,
            isNullable: true,
          },
          {
            name: "user_id",
            type: "uuid",
            isUnique: false,
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "producer_action",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedTableName: "user",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "producer_action",
      new TableForeignKey({
        columnNames: ["producer_id"],
        referencedTableName: "producer",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "producer_action",
      new TableForeignKey({
        columnNames: ["producer_agent_id"],
        referencedTableName: "producer_agent",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("producer_action");
    await queryRunner.dropTable("producer_agent");
    await queryRunner.dropTable("producer");
  }
}
