import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import BaseModel from "./baseModel.entity";
import { FileUse } from "./fileUse.entity";
import { User } from "./user.entity";

@ObjectType()
@Index("file_pkey", ["id"], { unique: true })
@Entity("file", { schema: "public" })
export class File extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", {
    name: "encoding",
    nullable: false,
    unique: false,
    length: 15,
  })
  encoding: string;

  @Field({ nullable: false })
  @Column("varchar", {
    name: "mimetype",
    nullable: false,
    unique: false,
    length: 100,
  })
  mimetype: string;

  @Field({ nullable: false })
  @Column("varchar", {
    name: "destination",
    nullable: false,
    unique: false,
    length: 30,
  })
  destination: string;

  @Field({ nullable: false })
  @Column("varchar", {
    name: "filename",
    nullable: false,
    unique: true,
    length: 50,
  })
  filename: string;

  @Field({ nullable: false })
  @Column("varchar", {
    name: "path",
    nullable: false,
    unique: true,
    length: 70,
  })
  path: string;

  @Field({ nullable: false })
  @Column("integer", { name: "size", nullable: false, unique: false })
  size: number;

  @Field({ nullable: false })
  @Column("boolean", {
    name: "is_used",
    nullable: true,
    unique: false,
    default: false,
  })
  isUsed?: boolean;

  @ManyToOne(() => User)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user?: User;

  @OneToOne(() => FileUse, (fileUse) => fileUse.file)
  fileUse?: FileUse;
}
