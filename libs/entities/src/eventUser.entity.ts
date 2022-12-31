import { Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { User } from './user.entity';
import { Event } from './event.entity';

@Index('event_user_pkey', ['id'], { unique: true })
@Entity('event_user', { schema: 'public' })
export class EventUser extends BaseModel {
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
}
