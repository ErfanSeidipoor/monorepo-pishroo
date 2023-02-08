import { ObjectType } from "@nestjs/graphql";
import { TagUseStatusEnum } from "@pishroo/enums";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import BaseModel from "./baseModel.entity";
import { Product } from "./product.entity";
import { Project } from "./project.entity";
import { Tag } from "./tag.entity";

@ObjectType("TagUse")
@Index("tag_use_pkey", ["id"], { unique: true })
@Entity("tag_use", { schema: "public" })
export class TagUse extends BaseModel {
  @Column({
    type: "enum",
    name: "status",
    enum: TagUseStatusEnum,
    nullable: false,
  })
  status: TagUseStatusEnum;

  // relations
  @OneToOne(() => Tag, (tag) => tag.tagUse, { nullable: false })
  @JoinColumn({
    name: "tag_id",
    referencedColumnName: "id",
  })
  tag: Tag;

  @ManyToOne(() => Product, (product) => product.tagUses)
  @JoinColumn({
    name: "product_id",
    referencedColumnName: "id",
  })
  product?: Product;

  @ManyToOne(() => Project, (project) => project.tagUses)
  @JoinColumn({
    name: "project_id",
    referencedColumnName: "id",
  })
  project?: Project;
}
