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
import { Producer } from "./producer.entity";
import { ProducerAction } from "./producerAction.entity";

@ObjectType()
@Index("producer_agent_pkey", ["id"], { unique: true })
@Entity("producer_agent", { schema: "public" })
export class ProducerAgent extends BaseModel {
  @Field({ nullable: true })
  @Column("varchar", { name: "first_name", nullable: true, length: 50 })
  firstName: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "last_name", nullable: true, length: 50 })
  lastName: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "description", nullable: false })
  description: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Producer, (producer) => producer.producerAgents, {
    nullable: true,
  })
  @JoinColumn({
    name: "producer_id",
    referencedColumnName: "id",
  })
  producer: Producer;

  @OneToMany(
    () => ProducerAction,
    (producerAction) => producerAction.producerAgent,
    {
      cascade: true,
    }
  )
  producerActions: ProducerAction[];
}

@ObjectType()
export class PaginatedProducerAgent extends Paginated(ProducerAgent) {}
