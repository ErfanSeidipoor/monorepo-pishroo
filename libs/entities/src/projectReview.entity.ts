import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { FileUse } from './fileUse.entity';
import { Project } from './project.entity';

@Index('project_review_pkey', ['id'], { unique: true })
@Entity('project_review', { schema: 'public' })
export class ProjectReview extends BaseModel {
  @Column('varchar', { name: 'reviewer', nullable: false, length: 100 })
  reviewer: string;

  @Column('text', {
    name: 'text',
    unique: false,
    nullable: false,
  })
  text: string;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Project, (project) => project.projectReviews, {
    nullable: false,
  })
  @JoinColumn({
    name: 'project_id',
    referencedColumnName: 'id',
  })
  project: Project;

  @OneToMany(() => FileUse, (fileUse) => fileUse.projectReview, {
    cascade: true,
  })
  fileUses: FileUse[];
}
