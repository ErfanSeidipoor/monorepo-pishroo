import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import BaseModel from "./baseModel.entity";
import { ObjectType, Field } from "@nestjs/graphql";
import { Province } from "./province.entity";
import { Paginated } from "@pishroo/models";

@ObjectType("City")
@Index("city_pkey", ["id"], { unique: true })
@Entity("city", { schema: "public" })
export class City extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "name", nullable: false, length: 50 })
  name: string;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "province_id", nullable: false })
  provinceId: string;

  @Field(() => Province, { nullable: false })
  @ManyToOne(() => Province, (province) => province.cities, {
    nullable: false,
  })
  @JoinColumn({
    name: "province_id",
    referencedColumnName: "id",
  })
  province: Province;
}

@ObjectType()
export class PaginatedCity extends Paginated(City) {}
