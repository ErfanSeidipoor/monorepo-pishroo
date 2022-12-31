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
import { Product } from "./product.entity";

@Index("product_review_pkey", ["id"], { unique: true })
@Entity("product_review", { schema: "public" })
@ObjectType()
export class ProductReview extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "reviewer", nullable: false, length: 100 })
  reviewer: string;

  @Field({ nullable: false })
  @Column("text", {
    name: "text",
    unique: false,
    nullable: false,
  })
  text: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Product, (product) => product.productReviews, {
    nullable: false,
  })
  @JoinColumn({
    name: "product_id",
    referencedColumnName: "id",
  })
  product: Product;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "product_id", nullable: false })
  productId: string;

  @Field(() => [FileUse], { nullable: false, defaultValue: [] })
  @OneToMany(() => FileUse, (fileUse) => fileUse.productReview, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedProductReview extends Paginated(ProductReview) {}
