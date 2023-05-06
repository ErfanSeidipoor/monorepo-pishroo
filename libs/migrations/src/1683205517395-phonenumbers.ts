import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class Phonenumbers1683205517395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("call", [
      new TableColumn({
        name: "transporter_id",
        type: "uuid",
        isUnique: false,
        isNullable: true,
      }),
      new TableColumn({
        name: "producer_id",
        type: "uuid",
        isUnique: false,
        isNullable: true,
      }),
      new TableColumn({
        name: "type",
        type: "enum",
        enum: ["transporter", "producer", "customer", "unknow"],
        isNullable: false,
      }),
      new TableColumn({
        name: "timestamp",
        type: "varchar",
        length: "20",
        isUnique: false,
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKey(
      "call",
      new TableForeignKey({
        columnNames: ["transporter_id"],
        referencedTableName: "transporter",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "call",
      new TableForeignKey({
        columnNames: ["producer_id"],
        referencedTableName: "producer",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("call", [
      "transporter_id",
      "producer_id",
      "type",
      "timestamp",
    ]);
  }
}
