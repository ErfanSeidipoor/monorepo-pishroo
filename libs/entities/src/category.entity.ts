import { Field, ObjectType } from "@nestjs/graphql";
import { Paginated } from "@pishroo/models";
import { Column, Entity, Index, OneToMany } from "typeorm";
import BaseModel from "./baseModel.entity";
import { ProductCategory } from "./productCategory.entity";

@ObjectType()
@Index("category_pkey", ["id"], { unique: true })
@Entity("category", { schema: "public" })
export class Category extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", {
    name: "name",
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @OneToMany(
    () => ProductCategory,
    (productCategories) => productCategories.category,
    {
      cascade: true,
    }
  )
  productCategories: ProductCategory[];
}

@ObjectType()
export class PaginatedCategory extends Paginated(Category) {}
