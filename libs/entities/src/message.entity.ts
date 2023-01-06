import { Field, ObjectType } from "@nestjs/graphql";
import { Paginated } from "@pishroo/models";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import BaseModel from "./baseModel.entity";
import { CustomerMessage } from "./customerMessage.entity";
import { User } from "./user.entity";

@ObjectType()
@Index("message_pkey", ["id"], { unique: true })
@Entity("message", { schema: "public" })
export class Message extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "text", nullable: false, length: 500 })
  text: string | null;

  @Field({ nullable: false })
  @Column("integer", { name: "count", nullable: true })
  count: number | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_submited", nullable: true })
  isSubmited: boolean | null;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "user_id", nullable: false })
  userId: string;

  @ManyToOne(() => User, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;

  @OneToMany(
    () => CustomerMessage,
    (customerMessage) => customerMessage.message,
    {
      cascade: true,
    }
  )
  customerMessages: CustomerMessage[];
}

@ObjectType()
export class PaginatedMessage extends Paginated(Message) {}
