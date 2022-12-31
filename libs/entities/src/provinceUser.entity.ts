import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import BaseModel from "./baseModel.entity";
import { User } from "./user.entity";
import { Province } from "./province.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Index("province_user_pkey", ["id"], { unique: true })
@Entity("province_user", { schema: "public" })
export class ProvinceUser extends BaseModel {
  @Field({ nullable: false })
  @Column({ type: "uuid", name: "user_id", nullable: false })
  userId: string;

  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, (user) => user.provinceUsers, {
    nullable: false,
  })
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "province_id", nullable: false })
  provinceId: string;

  @Field(() => Province, { nullable: false })
  @ManyToOne(() => Province, (province) => province.provinceUsers, {
    nullable: false,
  })
  @JoinColumn({
    name: "province_id",
    referencedColumnName: "id",
  })
  province: Province;
}
