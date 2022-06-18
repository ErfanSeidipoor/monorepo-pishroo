import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Index('product_category_pkey', ['id'], { unique: true })
@Entity('product_category', { schema: 'public' })
export class ProductCategory extends BaseModel {
  @ManyToOne(() => Category, (category) => category.productCategories, {
    nullable: false,
  })
  @JoinColumn({
    name: 'category_id',
    referencedColumnName: 'id',
  })
  category: Category;

  @ManyToOne(() => Product, (product) => product.productCategories, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: Product;
}
