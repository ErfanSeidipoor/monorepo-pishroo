import { Field, ObjectType } from "@nestjs/graphql";
import { PropertyUnitEnum } from "@pishroo/enums";
import { Paginated } from "@pishroo/models";
import { Column, Entity, Index, OneToMany } from "typeorm";
import BaseModel from "./baseModel.entity";
import { ProductProperty } from "./productProperty.entity";
@ObjectType()
@Index("property_pkey", ["id"], { unique: true })
@Entity("property", { schema: "public" })
export class Property extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", {
    name: "name",
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Field(() => PropertyUnitEnum, { nullable: false })
  @Column({
    type: "enum",
    name: "unit",
    enum: PropertyUnitEnum,
    nullable: false,
  })
  unit: PropertyUnitEnum;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @OneToMany(
    () => ProductProperty,
    (productProperties) => productProperties.property,
    {
      cascade: true,
    }
  )
  productProperties: ProductProperty[];
}

@ObjectType()
export class PaginatedProperty extends Paginated(Property) {}
