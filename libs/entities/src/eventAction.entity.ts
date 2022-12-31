import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { User } from './user.entity';
import { Event } from './event.entity';
import { EventActionStatusEnum, EventActionTypeEnum } from '@pishroo/enums';
import { FileUse } from './fileUse.entity';

@Index('event_action_pkey', ['id'], { unique: true })
@Entity('event_action', { schema: 'public' })
export class EventAction extends BaseModel {
  @Column({
    type: 'enum',
    name: 'status',
    enum: EventActionStatusEnum,
    nullable: true,
  })
  status: EventActionStatusEnum;

  @Column('text', { name: 'comment', nullable: true })
  comment: string | null;

  @Column({
    type: 'enum',
    name: 'type',
    enum: EventActionTypeEnum,
    nullable: true,
  })
  type: EventActionTypeEnum;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @ManyToOne(() => Event, (event) => event.eventUsers, {
    nullable: false,
  })
  @JoinColumn({
    name: 'event_id',
    referencedColumnName: 'id',
  })
  event: Event;

  @OneToMany(() => FileUse, (fileUse) => fileUse.eventAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}
