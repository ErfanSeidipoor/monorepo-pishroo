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
import { Project } from "./project.entity";

@ObjectType()
@Index("project_review_pkey", ["id"], { unique: true })
@Entity("project_review", { schema: "public" })
export class ProjectReview extends BaseModel {
  @Field({ nullable: true })
  @Column("varchar", { name: "reviewer", nullable: false, length: 100 })
  reviewer: string;

  @Field({ nullable: true })
  @Column("text", {
    name: "text",
    unique: false,
    nullable: false,
  })
  text: string;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "project_id", nullable: true })
  projectId: string;

  @ManyToOne(() => Project, (project) => project.projectReviews, {
    nullable: false,
  })
  @JoinColumn({
    name: "project_id",
    referencedColumnName: "id",
  })
  project: Project;

  @OneToMany(() => FileUse, (fileUse) => fileUse.projectReview, {
    cascade: true,
  })
  fileUses: FileUse[];
}

@ObjectType()
export class PaginatedProjectReview extends Paginated(ProjectReview) {}
