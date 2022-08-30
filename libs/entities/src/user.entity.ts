import { Column, Entity, Index, OneToMany } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { Exclude } from "class-transformer";
import BaseModel from "./baseModel.entity";
import { UserRoleEnum } from "@pishroo/enums";
import { ProvinceUser } from "./provinceUser.entity";
import { TransporterAction } from "./transporterAction.entity";
import { ProducerAction } from "./producerAction.entity";
import { CustomerAction } from "./customerAction.entity";

@ObjectType()
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "username", nullable: false, length: 50 })
  username: string | null;

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

  @Field(() => [UserRoleEnum], { nullable: false })
  @Column({
    type: "enum",
    name: "roles",
    enum: UserRoleEnum,
    nullable: true,
    array: true,
  })
  roles: UserRoleEnum[];

  @Column("varchar", { name: "password", nullable: true, length: 250 })
  @Exclude()
  password: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @OneToMany(() => ProvinceUser, (provinceUsers) => provinceUsers.user, {
    cascade: true,
  })
  provinceUsers: ProvinceUser[];

  @OneToMany(
    () => TransporterAction,
    (transporterAction) => transporterAction.user,
    {
      cascade: true,
    }
  )
  transporterActions: TransporterAction[];

  @OneToMany(() => ProducerAction, (producerAction) => producerAction.user, {
    cascade: true,
  })
  producerActions: ProducerAction[];

  @OneToMany(() => CustomerAction, (producerAction) => producerAction.user, {
    cascade: true,
  })
  customerActions: CustomerAction[];
}
