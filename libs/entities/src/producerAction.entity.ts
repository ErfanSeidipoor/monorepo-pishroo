import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { FileUse } from './fileUse.entity';
import { Producer } from './producer.entity';
import { ProducerAgent } from './producerAgent.entity';
import { User } from './user.entity';

@Index('producer_action_pkey', ['id'], { unique: true })
@Entity('producer_action', { schema: 'public' })
export class ProducerAction extends BaseModel {
  @Column('text', { name: 'text', nullable: false })
  text: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(() => Producer, (producer) => producer.producerActions, {
    nullable: false,
  })
  @JoinColumn({
    name: 'producer_id',
    referencedColumnName: 'id',
  })
  producer: Producer;

  @ManyToOne(
    () => ProducerAgent,
    (producerAgent) => producerAgent.producerActions,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: 'producer_agent_id',
    referencedColumnName: 'id',
  })
  producerAgent: ProducerAgent;

  @ManyToOne(() => User, (user) => user.producerActions, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @OneToMany(() => FileUse, (fileUse) => fileUse.producerAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}
