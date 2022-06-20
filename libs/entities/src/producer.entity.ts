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
import { ProducerAction } from './producerAction.entity';
import { ProducerAgent } from './producerAgent.entity';

@Index('producer_pkey', ['id'], { unique: true })
@Entity('producer', { schema: 'public' })
export class Producer extends BaseModel {
  @Column('varchar', {
    name: 'name',
    unique: true,
    nullable: false,
    length: 50,
  })
  name: string | null;

  @Column('varchar', {
    name: 'phone',
    unique: true,
    nullable: true,
    length: 20,
  })
  phone: string | null;

  @Column('varchar', {
    name: 'email',
    unique: true,
    nullable: true,
    length: 50,
  })
  email: string | null;

  @Column('text', { name: 'description', nullable: false })
  description: string | null;

  @Column('varchar', { name: 'address', nullable: true, length: 256 })
  address: string | null;

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

  @OneToMany(() => ProducerAgent, (producerAgent) => producerAgent.producer, {
    cascade: true,
  })
  producerAgents: ProducerAgent[];

  @OneToMany(
    () => ProducerAction,
    (producerAction) => producerAction.producer,
    {
      cascade: true,
    }
  )
  producerActions: ProducerAction[];
}
