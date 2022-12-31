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
import { TransporterAction } from "./transporterAction.entity";
import { TransporterAgent } from "./transporterAgent.entity";

@ObjectType()
@Index("transporter_pkey", ["id"], { unique: true })
@Entity("transporter", { schema: "public" })
export class Transporter extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", {
    name: "name",
    unique: true,
    nullable: false,
    length: 50,
  })
  name: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "phone",
    unique: true,
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

  @Field({ nullable: false })
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

  @OneToMany(
    () => TransporterAgent,
    (transporterAgent) => transporterAgent.transporter,
    {
      cascade: true,
    }
  )
  transporterAgents: TransporterAgent[];

  @OneToMany(
    () => TransporterAction,
    (transporterAction) => transporterAction.transporter,
    {
      cascade: true,
    }
  )
  transporterActions: TransporterAction[];

  @OneToMany(() => FileUse, (fileUse) => fileUse.transporter, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedTransporter extends Paginated(Transporter) {}
