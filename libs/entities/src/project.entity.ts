import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { FileUse } from './fileUse.entity';
import { ProductProject } from './productProject.entity';
import { ProjectReview } from './projectReview.entity';
import { TagUse } from './tagUse.entity';

@Index('project_pkey', ['id'], { unique: true })
@Entity('project', { schema: 'public' })
export class Project extends BaseModel {
  @Column('varchar', { name: 'name', nullable: false, length: 50 })
  name: string;

  @Column('varchar', {
    name: 'slug',
    unique: true,
    nullable: false,
    length: 50,
  })
  slug: string;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @Column('text', { name: 'text', nullable: false })
  description: string;

  @Column('float', { name: 'lat', nullable: true })
  lat: number | null;

  @Column('float', { name: 'long', nullable: true })
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
}
