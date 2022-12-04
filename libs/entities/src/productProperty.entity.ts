import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import BaseModel from "./baseModel.entity";
import { Property } from "./property.entity";
import { Product } from "./product.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Index("product_property_pkey", ["id"], { unique: true })
@Entity("product_property", { schema: "public" })
export class ProductProperty extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", {
    name: "value",
    unique: false,
    nullable: false,
    length: 100,
  })
  value: string;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "property_id", nullable: false })
  propertyId: string;

  @Field(() => Property, { nullable: false })
  @ManyToOne(() => Property, (property) => property.productProperties, {
    nullable: false,
  })
  @JoinColumn({
    name: "property_id",
    referencedColumnName: "id",
  })
  property: Property;

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "product_id", nullable: false })
  productId: string;

  @ManyToOne(() => Product, (product) => product.productProperties, {
    nullable: false,
  })
  @JoinColumn({
    name: "product_id",
    referencedColumnName: "id",
  })
  product: Product;
}
