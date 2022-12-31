import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { EventStatusEnum } from '@pishroo/enums';
import { User } from './user.entity';
import { EventUser } from './eventUser.entity';
import { EventAction } from './eventAction.entity';

@Index('event_pkey', ['id'], { unique: true })
@Entity('event', { schema: 'public' })
export class Event extends BaseModel {
  @Column('varchar', { name: 'username', nullable: false, length: 50 })
  title: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @Column({
    type: 'enum',
    name: 'status',
    enum: EventStatusEnum,
    nullable: true,
  })
  status: EventStatusEnum;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @OneToMany(() => EventUser, (eventUser) => eventUser.event, {
    cascade: true,
  })
  eventUsers: EventUser[];

  @OneToMany(() => EventAction, (eventAction) => eventAction.event, {
    cascade: true,
  })
  eventActions: EventAction[];
}
