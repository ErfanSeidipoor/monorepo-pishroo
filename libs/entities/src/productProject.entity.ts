import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Project } from './project.entity';
import { Product } from './product.entity';

@Index('product_project_pkey', ['id'], { unique: true })
@Entity('product_project', { schema: 'public' })
export class ProductProject extends BaseModel {
  @ManyToOne(() => Project, (project) => project.productProjects, {
    nullable: false,
  })
  @JoinColumn({
    name: 'project_id',
    referencedColumnName: 'id',
  })
  project: Project;

  @ManyToOne(() => Product, (product) => product.productProjects, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: Product;
}
