import { Column, Entity, Index } from 'typeorm';
import { Exclude } from 'class-transformer';
import BaseModel from './baseModel.entity';
import { UserRoleEnum } from '@pishroo/enums';

@Index('user_pkey', ['id'], { unique: true })
@Entity('user', { schema: 'public' })
export class User extends BaseModel {
  @Column('varchar', { name: 'username', nullable: false, length: 50 })
  username: string | null;

  @Column('varchar', { name: 'first_name', nullable: true, length: 50 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 50 })
  lastName: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 50 })
  email: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 20 })
  phone: string | null;

  @Column({
    type: 'enum',
    name: 'role',
    enum: UserRoleEnum,
    nullable: true,
    array: true,
  })
  role: UserRoleEnum[];

  @Column('varchar', { name: 'password', nullable: true, length: 250 })
  @Exclude()
  password: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;
}