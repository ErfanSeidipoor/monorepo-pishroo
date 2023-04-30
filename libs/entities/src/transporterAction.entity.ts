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
import { FileUse } from "./fileUse.entity";
import { Transporter } from "./transporter.entity";
import { TransporterAgent } from "./transporterAgent.entity";
import { User } from "./user.entity";

@ObjectType("transporterAction")
@Index("transporter_action_pkey", ["id"], { unique: true })
@Entity("transporter_action", { schema: "public" })
export class TransporterAction extends BaseModel {
  @Field({ nullable: false })
  @Column("text", { name: "text", nullable: false })
  text: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field(() => Transporter, { nullable: false })
  @ManyToOne(
    () => Transporter,
    (transporter) => transporter.transporterActions,
    {
      nullable: false,
    }
  )
  @JoinColumn({
    name: "transporter_id",
    referencedColumnName: "id",
  })
  transporter: Transporter;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "transporter_id", nullable: false })
  transporterId: string;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "user_id", nullable: false })
  userId: string;

  @Field(() => TransporterAgent, { nullable: true })
  @ManyToOne(
    () => TransporterAgent,
    (transporterAgent) => transporterAgent.transporterActions,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: "transporter_agent_id",
    referencedColumnName: "id",
  })
  transporterAgent: TransporterAgent;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, (user) => user.transporterActions, {
    nullable: false,
  })
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;

  @Field(() => [FileUse], { nullable: true })
  @OneToMany(() => FileUse, (fileUse) => fileUse.transporterAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedTransporterAction extends Paginated(TransporterAction) {}
