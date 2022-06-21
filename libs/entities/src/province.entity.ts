import { Column, Entity, Index, OneToMany } from 'typeorm';
import BaseModel from './baseModel.entity';
import { City } from './city.entity';
import { ProvinceUser } from './provinceUser.entity';

@Index('province_pkey', ['id'], { unique: true })
@Entity('province', { schema: 'public' })
export class Province extends BaseModel {
  @Column('varchar', { name: 'name', nullable: false, length: 50 })
  name: string;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @OneToMany(() => City, (city) => city.province, {
    cascade: true,
  })
  cities: City[];

  @OneToMany(() => ProvinceUser, (provinceUsers) => provinceUsers.user, {
    cascade: true,
  })
  provinceUsers: ProvinceUser[];
}
