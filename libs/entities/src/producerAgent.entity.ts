import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { Producer } from './producer.entity';
import { ProducerAction } from './producerAction.entity';

@Index('producer_agent_pkey', ['id'], { unique: true })
@Entity('producer_agent', { schema: 'public' })
export class ProducerAgent extends BaseModel {
  @Column('varchar', { name: 'first_name', nullable: true, length: 50 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 50 })
  lastName: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 50 })
  email: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 20 })
  phone: string | null;

  @Column('text', { name: 'description', nullable: false })
  description: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Producer, (producer) => producer.producerAgents, {
    nullable: true,
  })
  @JoinColumn({
    name: 'producer_id',
    referencedColumnName: 'id',
  })
  producer: Producer;

  @OneToMany(
    () => ProducerAction,
    (producerAction) => producerAction.producerAgent,
    {
      cascade: true,
    }
  )
  producerActions: ProducerAction[];
}
