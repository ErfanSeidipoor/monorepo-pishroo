import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { City } from './city.entity';
import { CustomerAction } from './customerAction.entity';
import { CustomerMessage } from './customerMessage.entity';

@Index('customer_agent_pkey', ['id'], { unique: true })
@Entity('customer_agent', { schema: 'public' })
export class Customer extends BaseModel {
  @Column('varchar', { name: 'first_name', nullable: true, length: 50 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 50 })
  lastName: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 50 })
  email: string | null;

  @Column('varchar', { name: 'job_title', nullable: true, length: 50 })
  jobTitle: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 20 })
  phone: string | null;

  @Column('varchar', { name: 'office_phone', nullable: true, length: 20 })
  officePhone: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => City, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: 'city_id',
    referencedColumnName: 'id',
  })
  city: City;

  @OneToMany(
    () => CustomerAction,
    (customerAction) => customerAction.customer,
    {
      cascade: true,
    }
  )
  customerActions: CustomerAction[];

  @OneToMany(
    () => CustomerMessage,
    (customerMessage) => customerMessage.customer,
    {
      cascade: true,
    }
  )
  customerMessages: CustomerMessage[];
}
