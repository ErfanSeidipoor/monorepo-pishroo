import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import BaseModel from "./baseModel.entity";
import { Customer } from "./customer.entity";
import { FileUse } from "./fileUse.entity";
import { User } from "./user.entity";
import { Transporter } from "./transporter.entity";
import { Producer } from "./producer.entity";
import { CallTypeEnum } from "@pishroo/enums";
import { Paginated } from "@pishroo/models";

@ObjectType()
@Index("call_pkey", ["id"], { unique: true })
@Entity("call", { schema: "public" })
export class Call extends BaseModel {
  @Field({ nullable: true })
  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "timestamp", nullable: true, length: 20 })
  timestamp: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "new_phone", nullable: true, length: 20 })
  newPhone: string | null;

  @ManyToOne(() => User, () => undefined, {
    nullable: false,
  })
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "user_id", nullable: false })
  userId: string;

  @ManyToOne(() => Customer, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "customer_id",
    referencedColumnName: "id",
  })
  customer: Customer;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "customer_id", nullable: true })
  customerId: string;

  @ManyToOne(() => Transporter, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "transporter_id",
    referencedColumnName: "id",
  })
  transporter: Transporter;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "transporter_id", nullable: true })
  transporterId: string;

  @ManyToOne(() => Producer, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "producer_id",
    referencedColumnName: "id",
  })
  producer: Producer;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "producer_id", nullable: true })
  producerId: string;

  @Field(() => CallTypeEnum, { nullable: false })
  @Column({
    type: "enum",
    name: "type",
    enum: CallTypeEnum,
    nullable: false,
  })
  type: CallTypeEnum;

  @OneToMany(() => FileUse, (fileUse) => fileUse.call, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedCall extends Paginated(Call) {}
