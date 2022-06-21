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
import { Product } from './product.entity';

@Index('product_review_pkey', ['id'], { unique: true })
@Entity('product_review', { schema: 'public' })
export class ProductReview extends BaseModel {
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

  @ManyToOne(() => Product, (product) => product.productReviews, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: Product;

  @OneToMany(() => FileUse, (fileUse) => fileUse.productReview, {
    cascade: true,
  })
  fileUses: FileUse[];
}
