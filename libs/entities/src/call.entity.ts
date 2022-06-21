import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { Customer } from './customer.entity';
import { FileUse } from './fileUse.entity';
import { User } from './user.entity';

@Index('call_pkey', ['id'], { unique: true })
@Entity('call', { schema: 'public' })
export class Call extends BaseModel {
  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('varchar', { name: 'new_phone', nullable: true, length: 20 })
  newPhone: string | null;

  @ManyToOne(() => User, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @ManyToOne(() => Customer, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: 'customer_id',
    referencedColumnName: 'id',
  })
  customer: Customer;

  @OneToMany(() => FileUse, (fileUse) => fileUse.call, {
    cascade: true,
  })
  fileUses: FileUse[];
}
