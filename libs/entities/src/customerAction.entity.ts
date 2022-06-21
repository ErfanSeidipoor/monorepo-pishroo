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

@Index('customer_action_pkey', ['id'], { unique: true })
@Entity('customer_action', { schema: 'public' })
export class CustomerAction extends BaseModel {
  @Column('text', { name: 'text', nullable: false })
  text: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Customer, (customer) => customer.customerActions, {
    nullable: true,
  })
  @JoinColumn({
    name: 'customer_agent_id',
    referencedColumnName: 'id',
  })
  customer: Customer;

  @ManyToOne(() => User, (user) => user.customerActions, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @OneToMany(() => FileUse, (fileUse) => fileUse.customerAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}
