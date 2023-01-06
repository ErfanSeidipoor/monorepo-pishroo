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
import { City } from "./city.entity";
import { CustomerAction } from "./customerAction.entity";
import { CustomerMessage } from "./customerMessage.entity";

@ObjectType()
@Index("customer_pkey", ["id"], { unique: true })
@Entity("customer", { schema: "public" })
export class Customer extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "first_name", nullable: true, length: 50 })
  firstName: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "last_name", nullable: true, length: 50 })
  lastName: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "job_title", nullable: true, length: 50 })
  jobTitle: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "office_phone", nullable: true, length: 20 })
  officePhone: string | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "city_id", nullable: true })
  cityId: string;

  @ManyToOne(() => City, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "city_id",
    referencedColumnName: "id",
  })
  city: City;

  @OneToMany(
    () => CustomerAction,
    (customerAction) => customerAction.customer,
    {
      cascade: true,
    }
  )
  customerActions: CustomerAction[];

  @OneToMany(
    () => CustomerMessage,
    (customerMessage) => customerMessage.customer,
    {
      cascade: true,
    }
  )
  customerMessages: CustomerMessage[];
}

@ObjectType()
export class PaginatedCustomer extends Paginated(Customer) {}
