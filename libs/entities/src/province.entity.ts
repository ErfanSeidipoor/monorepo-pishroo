import { Column, Entity, Index, OneToMany } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";
import BaseModel from "./baseModel.entity";
import { City } from "./city.entity";
import { ProvinceUser } from "./provinceUser.entity";
import { Paginated } from "@pishroo/models";

@ObjectType("Province")
@Index("province_pkey", ["id"], { unique: true })
@Entity("province", { schema: "public" })
export class Province extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "name", nullable: false, length: 50 })
  name: string;

  @Field(() => [City], { nullable: false, defaultValue: [] })
  @OneToMany(() => City, (city) => city.province, {
    cascade: true,
  })
  cities: City[];

  @Field(() => [ProvinceUser], { nullable: true, defaultValue: [] })
  @OneToMany(() => ProvinceUser, (provinceUsers) => provinceUsers.user, {
    cascade: true,
  })
  provinceUsers: ProvinceUser[];
}

@ObjectType()
export class PaginatedProvince extends Paginated(Province) {}
