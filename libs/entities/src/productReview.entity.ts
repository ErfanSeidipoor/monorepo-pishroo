import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Product } from './product.entity';

@Index('product_review_pkey', ['id'], { unique: true })
@Entity('product_review', { schema: 'public' })
export class ProductReview extends BaseModel {
  @Column('varchar', { name: 'reviewer', nullable: false, length: 100 })
  reviewer: string;

  @Column('text', {
    name: 'slug',
    unique: false,
    nullable: false,
  })
  slug: string;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Product, (product) => product.productReviews, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: Product;
}
