import { Field, ObjectType } from "@nestjs/graphql";
import { Paginated } from "@pishroo/models";
import { Column, Entity, Index, OneToMany } from "typeorm";
import BaseModel from "./baseModel.entity";
import { ProductColor } from "./productColor.entity";

@ObjectType()
@Index("color_pkey", ["id"], { unique: true })
@Entity("color", { schema: "public" })
export class Color extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", {
    name: "name",
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Field({ nullable: false })
  @Column("char", {
    name: "value",
    nullable: false,
    length: 6,
    unique: true,
  })
  value: string;

  @OneToMany(() => ProductColor, (productColors) => productColors.color, {
    cascade: true,
  })
  productColors: ProductColor[];
}

@ObjectType()
export class PaginatedColor extends Paginated(Color) {}
