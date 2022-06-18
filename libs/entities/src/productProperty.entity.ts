import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Property } from './property.entity';
import { Product } from './product.entity';

@Index('product_property_pkey', ['id'], { unique: true })
@Entity('product_property', { schema: 'public' })
export class ProductProperty extends BaseModel {
  @Column('varchar', {
    name: 'value',
    unique: false,
    nullable: false,
    length: 100,
  })
  value: string;

  @ManyToOne(() => Property, (property) => property.productProperties, {
    nullable: false,
  })
  @JoinColumn({
    name: 'property_id',
    referencedColumnName: 'id',
  })
  property: Property;

  @ManyToOne(() => Product, (product) => product.productProperties, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product: Product;
}
