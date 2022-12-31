import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import BaseModel from "./baseModel.entity";
import { Category } from "./category.entity";
import { Product } from "./product.entity";

@ObjectType()
@Index("product_category_pkey", ["id"], { unique: true })
@Entity("product_category", { schema: "public" })
export class ProductCategory extends BaseModel {
  @Field({ nullable: false })
  @Column({ type: "uuid", name: "category_id", nullable: false })
  categoryId: string;

  @Field(() => Category, { nullable: false })
  @ManyToOne(() => Category, (category) => category.productCategories, {
    nullable: false,
  })
  @JoinColumn({
    name: "category_id",
    referencedColumnName: "id",
  })
  category: Category;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "product_id", nullable: false })
  productId: string;

  @ManyToOne(() => Product, (product) => product.productCategories, {
    nullable: false,
  })
  @JoinColumn({
    name: "product_id",
    referencedColumnName: "id",
  })
  product: Product;
}
