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
import { FileUse } from "./fileUse.entity";
import { ProductProject } from "./productProject.entity";
import { ProjectReview } from "./projectReview.entity";
import { TagUse } from "./tagUse.entity";

@ObjectType()
@Index("project_pkey", ["id"], { unique: true })
@Entity("project", { schema: "public" })
export class Project extends BaseModel {
  @Field({ nullable: false })
  @Column("varchar", { name: "name", nullable: false, length: 200 })
  name: string;

  @Field({ nullable: false })
  @Column("varchar", {
    name: "slug",
    unique: true,
    nullable: false,
    length: 200,
  })
  slug: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: true })
  @Column("text", { name: "description", nullable: true })
  description: string;

  @Field({ nullable: true })
  @Column("float", { name: "lat", nullable: true })
  lat: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "long", nullable: true })
  long: number | null;

  @OneToMany(() => ProjectReview, (projectReview) => projectReview.project, {
    cascade: true,
  })
  projectReviews: ProjectReview[];

  @OneToMany(
    () => ProductProject,
    (productProjects) => productProjects.project,
    {
      cascade: true,
    }
  )
  productProjects: ProductProject[];

  @OneToMany(() => TagUse, (tagUse) => tagUse.project, {
    cascade: true,
  })
  tagUses: TagUse[];

  @OneToMany(() => FileUse, (fileUse) => fileUse.project, {
    cascade: true,
  })
  fileUses: FileUse[];

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "city_id", nullable: true })
  cityId: string;

  @Field(() => City, { nullable: false })
  @ManyToOne(() => City, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: "city_id",
    referencedColumnName: "id",
  })
  city: City;
}

@ObjectType()
export class PaginatedProject extends Paginated(Project) {}
