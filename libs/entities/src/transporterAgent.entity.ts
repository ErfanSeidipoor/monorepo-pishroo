import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { Transporter } from './transporter.entity';
import { TransporterAction } from './transporterAction.entity';

@Index('transporter_agent_pkey', ['id'], { unique: true })
@Entity('transporter_agent', { schema: 'public' })
export class TransporterAgent extends BaseModel {
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

  @ManyToOne(
    () => Transporter,
    (transporter) => transporter.transporterAgents,
    {
      nullable: true,
    }
  )
  @JoinColumn({
    name: 'transporter_id',
    referencedColumnName: 'id',
  })
  transporter: Transporter;

  @OneToMany(
    () => TransporterAction,
    (transporterAction) => transporterAction.transporterAgent,
    {
      cascade: true,
    }
  )
  transporterActions: TransporterAction[];
}
