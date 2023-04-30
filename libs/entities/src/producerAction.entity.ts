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
import { FileUse } from "./fileUse.entity";
import { Producer } from "./producer.entity";
import { ProducerAgent } from "./producerAgent.entity";
import { User } from "./user.entity";
import { Paginated } from "@pishroo/models";

@ObjectType("ProducerAction")
@Index("producer_action_pkey", ["id"], { unique: true })
@Entity("producer_action", { schema: "public" })
export class ProducerAction extends BaseModel {
  @Field({ nullable: false })
  @Column("text", { name: "text", nullable: false })
  text: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field(() => Producer, { nullable: false })
  @ManyToOne(() => Producer, (producer) => producer.producerActions, {
    nullable: false,
  })
  @JoinColumn({
    name: "producer_id",
    referencedColumnName: "id",
  })
  producer: Producer;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "producer_id", nullable: false })
  producerId: string;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "user_id", nullable: false })
  userId: string;

  @ManyToOne(
    () => ProducerAgent,
    (producerAgent) => producerAgent.producerActions,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: "producer_agent_id",
    referencedColumnName: "id",
  })
  producerAgent: ProducerAgent;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, (user) => user.producerActions, {
    nullable: false,
  })
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;

  @Field(() => [FileUse], { nullable: true })
  @OneToMany(() => FileUse, (fileUse) => fileUse.producerAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedProducerAction extends Paginated(ProducerAction) {}
