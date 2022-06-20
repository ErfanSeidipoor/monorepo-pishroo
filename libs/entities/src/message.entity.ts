import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { User } from './user.entity';

@Index('message_pkey', ['id'], { unique: true })
@Entity('message', { schema: 'public' })
export class Message extends BaseModel {
  @Column('varchar', { name: 'message', nullable: false, length: 500 })
  message: string | null;

  @Column('integer', { name: 'count', nullable: true })
  count: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @Column('boolean', { name: 'is_submited', nullable: true })
  isSubmited: boolean | null;

  @ManyToOne(() => User, () => undefined, {
    nullable: true,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;
}
