import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { ProductCategory } from './productCategory.entity';

@Index('category_pkey', ['id'], { unique: true })
@Entity('category', { schema: 'public' })
export class Category extends BaseModel {
  @Column('varchar', {
    name: 'name',
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @OneToMany(
    () => ProductCategory,
    (productCategories) => productCategories.category,
    {
      cascade: true,
    }
  )
  productCategories: ProductCategory[];
}
