import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { ProductCategory } from './productCategory.entity';
import { ProductColor } from './productColor.entity';
import { ProductProperty } from './productProperty.entity';
import { ProductReview } from './productReview.entity';

@Index('product_pkey', ['id'], { unique: true })
@Entity('product', { schema: 'public' })
export class Product extends BaseModel {
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
  text: string;

  @OneToMany(() => ProductReview, (productReview) => productReview.product, {
    cascade: true,
  })
  productReviews: ProductReview[];

  @OneToMany(
    () => ProductCategory,
    (productCategories) => productCategories.product,
    {
      cascade: true,
    }
  )
  productCategories: ProductCategory[];

  @OneToMany(
    () => ProductProperty,
    (productProperties) => productProperties.product,
    {
      cascade: true,
    }
  )
  productProperties: ProductProperty[];

  @OneToMany(() => ProductColor, (productColors) => productColors.color, {
    cascade: true,
  })
  productColors: ProductColor[];
}
