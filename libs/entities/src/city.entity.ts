import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Province } from './province.entity';

@Index('city_pkey', ['id'], { unique: true })
@Entity('city', { schema: 'public' })
export class City extends BaseModel {
  @Column('varchar', { name: 'name', nullable: false, length: 50 })
  name: string;

  @ManyToOne(() => Province, (province) => province.cities, {
    nullable: false,
  })
  @JoinColumn({
    name: 'province_id',
    referencedColumnName: 'id',
  })
  province: Province;
}
