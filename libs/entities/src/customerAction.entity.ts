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
import { Paginated } from "@pishroo/models";

@ObjectType("CustomerAction")
@Index("customer_action_pkey", ["id"], { unique: true })
@Entity("customer_action", { schema: "public" })
export class CustomerAction extends BaseModel {
  @Field({ nullable: false })
  @Column("text", { name: "text", nullable: false })
  text: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field(() => Customer, { nullable: false })
  @ManyToOne(() => Customer, (customer) => customer.customerActions, {
    nullable: true,
  })
  @JoinColumn({
    name: "customer_id",
    referencedColumnName: "id",
  })
  customer: Customer;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "customer_id", nullable: false })
  customerId: string;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, (user) => user.customerActions, {
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

  @Field(() => [FileUse], { nullable: true })
  @OneToMany(() => FileUse, (fileUse) => fileUse.customerAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedCustomerAction extends Paginated(CustomerAction) {}
