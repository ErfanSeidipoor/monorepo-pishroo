import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { User } from './user.entity';
import { Province } from './province.entity';

@Index('province_user_pkey', ['id'], { unique: true })
@Entity('province_user', { schema: 'public' })
export class ProvinceUser extends BaseModel {
  @ManyToOne(() => User, (user) => user.provinceUsers, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @ManyToOne(() => Province, (province) => province.provinceUsers, {
    nullable: false,
  })
  @JoinColumn({
    name: 'province_id',
    referencedColumnName: 'id',
  })
  province: Province;
}
