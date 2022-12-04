import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import BaseModel from "./baseModel.entity";
import { Color } from "./color.entity";
import { Product } from "./product.entity";

@ObjectType()
@Index("product_color_pkey", ["id"], { unique: true })
@Entity("product_color", { schema: "public" })
export class ProductColor extends BaseModel {
  @Field({ nullable: false })
  @Column({ type: "uuid", name: "color_id", nullable: false })
  colorId: string;

  @Field(() => Color, { nullable: false })
  @ManyToOne(() => Color, (color) => color.productColors, {
    nullable: false,
  })
  @JoinColumn({
    name: "color_id",
    referencedColumnName: "id",
  })
  color: Color;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "product_id", nullable: false })
  productId: string;

  @ManyToOne(() => Product, (product) => product.productColors, {
    nullable: false,
  })
  @JoinColumn({
    name: "product_id",
    referencedColumnName: "id",
  })
  product: Product;
}
