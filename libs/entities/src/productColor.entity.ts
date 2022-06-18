import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Color } from './color.entity';
import { Product } from './product.entity';

@Index('product_color_pkey', ['id'], { unique: true })
@Entity('product_color', { schema: 'public' })
export class ProductColor extends BaseModel {
  @ManyToOne(() => Color, (color) => color.productColors, {
    nullable: false,
  })
  @JoinColumn({
    name: 'color_id',
    referencedColumnName: 'id',
  })
  color: Color;

  @ManyToOne(() => Product, (product) => product.productColors, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: Product;
}
