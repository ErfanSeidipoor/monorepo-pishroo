import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { ProductColor } from './productColor.entity';

@Index('color_pkey', ['id'], { unique: true })
@Entity('color', { schema: 'public' })
export class Color extends BaseModel {
  @Column('varchar', {
    name: 'name',
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Column('char', {
    name: 'value',
    nullable: false,
    length: 6,
    unique: true,
  })
  value: string;

  @OneToMany(() => ProductColor, (productColors) => productColors.color, {
    cascade: true,
  })
  productColors: ProductColor[];
}
