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
import { City } from "./city.entity";
import { FileUse } from "./fileUse.entity";
import { ProducerAction } from "./producerAction.entity";
import { ProducerAgent } from "./producerAgent.entity";

@ObjectType()
@Index("producer_pkey", ["id"], { unique: true })
@Entity("producer", { schema: "public" })
export class Producer extends BaseModel {
  @Field({ nullable: true })
  @Column("varchar", {
    name: "name",
    unique: false,
    nullable: false,
    length: 50,
  })
  name: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "phone",
    unique: false,
    nullable: true,
    length: 20,
  })
  phone: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "email",
    unique: false,
    nullable: true,
    length: 50,
  })
  email: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "description", nullable: false })
  description: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "address", nullable: true, length: 256 })
  address: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "city_id", nullable: true })
  cityId: string;

  @Field(() => City, { nullable: false })
  @ManyToOne(() => City, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "city_id",
    referencedColumnName: "id",
  })
  city: City;

  @OneToMany(() => ProducerAgent, (producerAgent) => producerAgent.producer, {
    cascade: true,
  })
  producerAgents: ProducerAgent[];

  @OneToMany(
    () => ProducerAction,
    (producerAction) => producerAction.producer,
    {
      cascade: true,
    }
  )
  producerActions: ProducerAction[];

  @OneToMany(() => FileUse, (fileUse) => fileUse.producer, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedProducer extends Paginated(Producer) {}
