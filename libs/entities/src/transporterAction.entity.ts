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
import { Transporter } from './transporter.entity';
import { TransporterAgent } from './transporterAgent.entity';
import { User } from './user.entity';

@Index('transporter_action_pkey', ['id'], { unique: true })
@Entity('transporter_action', { schema: 'public' })
export class TransporterAction extends BaseModel {
  @Column('text', { name: 'text', nullable: false })
  text: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @ManyToOne(
    () => Transporter,
    (transporter) => transporter.transporterActions,
    {
      nullable: false,
    }
  )
  @JoinColumn({
    name: 'transporter_id',
    referencedColumnName: 'id',
  })
  transporter: Transporter;

  @ManyToOne(
    () => TransporterAgent,
    (transporterAgent) => transporterAgent.transporterActions,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: 'transporter_agent_id',
    referencedColumnName: 'id',
  })
  transporterAgent: TransporterAgent;

  @ManyToOne(() => User, (user) => user.transporterActions, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User;

  @OneToMany(() => FileUse, (fileUse) => fileUse.transporterAction, {
    cascade: true,
  })
  fileUses: FileUse[];
}
