import { ObjectType, Field } from "@nestjs/graphql";
import { Paginated } from "@pishroo/models";

import { Column, Entity, Index, OneToMany } from "typeorm";
import BaseModel from "./baseModel.entity";
import { FileUse } from "./fileUse.entity";
import { ProductCategory } from "./productCategory.entity";
import { ProductColor } from "./productColor.entity";
import { ProductProject } from "./productProject.entity";
import { ProductProperty } from "./productProperty.entity";
import { ProductReview } from "./productReview.entity";
import { TagUse } from "./tagUse.entity";

@ObjectType("Product")
@Index("product_pkey", ["id"], { unique: true })
@Entity("product", { schema: "public" })
export class Product extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "name", nullable: false, length: 50 })
  name: string;

  @Field({ nullable: false })
  @Column("varchar", {
    name: "slug",
    unique: true,
    nullable: false,
    length: 50,
  })
  slug: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: false })
  @Column("text", { name: "text", nullable: false })
  text: string;

  @Field(() => [ProductReview], { nullable: true })
  @OneToMany(() => ProductReview, (productReview) => productReview.product, {
    cascade: true,
  })
  productReviews: ProductReview[];

  @Field(() => [ProductCategory], { nullable: true })
  @OneToMany(
    () => ProductCategory,
    (productCategories) => productCategories.product,
    {
      cascade: true,
    }
  )
  productCategories: ProductCategory[];

  @Field(() => [ProductProject], { nullable: true })
  @OneToMany(
    () => ProductProject,
    (productProjects) => productProjects.product,
    {
      cascade: true,
    }
  )
  productProjects: ProductProject[];

  @Field(() => [ProductProperty], { nullable: true })
  @OneToMany(
    () => ProductProperty,
    (productProperties) => productProperties.product,
    {
      cascade: true,
    }
  )
  productProperties?: ProductProperty[];

  @Field(() => [ProductColor], { nullable: true })
  @OneToMany(() => ProductColor, (productColors) => productColors.color, {
    cascade: true,
  })
  productColors: ProductColor[];

  @Field(() => [TagUse], { nullable: true })
  @OneToMany(() => TagUse, (tagUse) => tagUse.product, {
    cascade: true,
  })
  tagUses: TagUse[];

  @Field(() => [FileUse], { nullable: true })
  @OneToMany(() => FileUse, (fileUse) => fileUse.product, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedProduct extends Paginated(Product) {}
