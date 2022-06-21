import { FileUseStatusEnum, FileUseTypeEnum } from '@pishroo/enums';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import BaseModel from './baseModel.entity';
import { User } from './user.entity';
import { File } from './file.entity';
import { Product } from './product.entity';
import { ProductReview } from './productReview.entity';
import { Project } from './project.entity';
import { ProjectReview } from './projectReview.entity';
import { Transporter } from './transporter.entity';
import { TransporterAction } from './transporterAction.entity';
import { Producer } from './producer.entity';
import { ProducerAction } from './producerAction.entity';
import { EventAction } from './eventAction.entity';
import { CustomerAction } from './customerAction.entity';
import { Call } from './call.entity';

@Index('file_use_pkey', ['id'], { unique: true })
@Entity('file_use', { schema: 'public' })
export class FileUse extends BaseModel {
  @Column({
    type: 'enum',
    name: 'status',
    enum: FileUseStatusEnum,
    nullable: false,
  })
  status: FileUseStatusEnum;

  @Column({
    type: 'enum',
    name: 'type',
    enum: FileUseTypeEnum,
    nullable: false,
  })
  type: FileUseTypeEnum;

  @Column('boolean', { name: 'is_public', nullable: true })
  isPublic: boolean | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  // relations

  @OneToOne(() => File, (file) => file.fileUse, { nullable: false })
  @JoinColumn({
    name: 'file_id',
    referencedColumnName: 'id',
  })
  file: File;

  @ManyToOne(() => Product, (product) => product.fileUses)
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  product?: Product;

  @ManyToOne(() => ProductReview, (productReview) => productReview.fileUses)
  @JoinColumn({
    name: 'product_review_id',
    referencedColumnName: 'id',
  })
  productReview?: ProductReview;

  @ManyToOne(() => Project, (project) => project.fileUses)
  @JoinColumn({
    name: 'project_id',
    referencedColumnName: 'id',
  })
  project?: Project;

  @ManyToOne(() => ProjectReview, (projectReview) => projectReview.fileUses)
  @JoinColumn({
    name: 'product_review_id',
    referencedColumnName: 'id',
  })
  projectReview?: ProjectReview;

  @ManyToOne(() => Transporter, (transporter) => transporter.fileUses)
  @JoinColumn({
    name: 'transporter_id',
    referencedColumnName: 'id',
  })
  transporter?: Transporter;

  @ManyToOne(
    () => TransporterAction,
    (transporterAction) => transporterAction.fileUses
  )
  @JoinColumn({
    name: 'transporter_action_id',
    referencedColumnName: 'id',
  })
  transporterAction?: TransporterAction;

  @ManyToOne(() => Producer, (producer) => producer.fileUses)
  @JoinColumn({
    name: 'producer_id',
    referencedColumnName: 'id',
  })
  producer?: Producer;

  @ManyToOne(() => ProducerAction, (producerAction) => producerAction.fileUses)
  @JoinColumn({
    name: 'producer_action_id',
    referencedColumnName: 'id',
  })
  producerAction?: ProducerAction;

  @ManyToOne(() => EventAction, (eventAction) => eventAction.fileUses)
  @JoinColumn({
    name: 'event_action_id',
    referencedColumnName: 'id',
  })
  eventAction?: EventAction;

  @ManyToOne(() => CustomerAction, (customerAction) => customerAction.fileUses)
  @JoinColumn({
    name: 'customer_action_id',
    referencedColumnName: 'id',
  })
  customerAction?: CustomerAction;

  @ManyToOne(() => Call, (call) => call.fileUses)
  @JoinColumn({
    name: 'call_id',
    referencedColumnName: 'id',
  })
  call?: Call;
}
