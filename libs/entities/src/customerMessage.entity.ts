import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { Message } from './message.entity';
import { Customer } from './customer.entity';

@Index('customer_message_pkey', ['id'], { unique: true })
@Entity('customer_message', { schema: 'public' })
export class CustomerMessage extends BaseModel {
  @ManyToOne(() => Message, (message) => message.customerMessages, {
    nullable: false,
  })
  @JoinColumn({
    name: 'message_id',
    referencedColumnName: 'id',
  })
  message: Message;

  @ManyToOne(() => Customer, (customer) => customer.customerMessages, {
    nullable: false,
  })
  @JoinColumn({
    name: 'customer_id',
    referencedColumnName: 'id',
  })
  customer: Customer;
}
