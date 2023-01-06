import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import BaseModel from "./baseModel.entity";
import { Message } from "./message.entity";
import { Customer } from "./customer.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { Paginated } from "@pishroo/models";

@ObjectType()
@Index("customer_message_pkey", ["id"], { unique: true })
@Entity("customer_message", { schema: "public" })
export class CustomerMessage extends BaseModel {
  @Field({ nullable: false })
  @Column({ type: "uuid", name: "message_id", nullable: false })
  messageId: string;

  @Field(() => Message, { nullable: false })
  @ManyToOne(() => Message, (message) => message.customerMessages, {
    nullable: false,
  })
  @JoinColumn({
    name: "message_id",
    referencedColumnName: "id",
  })
  message: Message;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "customer_id", nullable: false })
  customerId: string;

  @Field(() => Customer, { nullable: false })
  @ManyToOne(() => Customer, (customer) => customer.customerMessages, {
    nullable: false,
  })
  @JoinColumn({
    name: "customer_id",
    referencedColumnName: "id",
  })
  customer: Customer;
}

@ObjectType()
export class PaginatedCustomerMessage extends Paginated(CustomerMessage) {}
