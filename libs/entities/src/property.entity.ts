import { PropertyUnitEnum } from '@pishroo/enums';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { ProductProperty } from './productProperty.entity';

@Index('property_pkey', ['id'], { unique: true })
@Entity('property', { schema: 'public' })
export class Property extends BaseModel {
  @Column('varchar', {
    name: 'name',
    nullable: false,
    length: 50,
    unique: true,
  })
  name: string;

  @Column({
    type: 'enum',
    name: 'unit',
    enum: PropertyUnitEnum,
    nullable: false,
  })
  unit: PropertyUnitEnum;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @OneToMany(
    () => ProductProperty,
    (productProperties) => productProperties.property,
    {
      cascade: true,
    }
  )
  productProperties: ProductProperty[];
}
