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
import { Transporter } from "./transporter.entity";
import { TransporterAction } from "./transporterAction.entity";

@ObjectType()
@Index("transporter_agent_pkey", ["id"], { unique: true })
@Entity("transporter_agent", { schema: "public" })
export class TransporterAgent extends BaseModel {
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
  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "transporter_id", nullable: true })
  transporterId: string;

  @ManyToOne(
    () => Transporter,
    (transporter) => transporter.transporterAgents,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: "transporter_id",
    referencedColumnName: "id",
  })
  transporter: Transporter;

  @OneToMany(
    () => TransporterAction,
    (transporterAction) => transporterAction.transporterAgent,
    {
      cascade: true,
    }
  )
  transporterActions: TransporterAction[];
}

@ObjectType()
export class PaginatedTransporterAgent extends Paginated(TransporterAgent) {}
