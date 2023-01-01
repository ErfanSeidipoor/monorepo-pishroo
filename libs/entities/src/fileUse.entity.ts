import { Field, ObjectType } from "@nestjs/graphql";
import { FileUseStatusEnum, FileUseTypeEnum } from "@pishroo/enums";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import BaseModel from "./baseModel.entity";
import { Call } from "./call.entity";
import { CustomerAction } from "./customerAction.entity";
import { EventAction } from "./eventAction.entity";
import { File } from "./file.entity";
import { Producer } from "./producer.entity";
import { ProducerAction } from "./producerAction.entity";
import { Product } from "./product.entity";
import { ProductReview } from "./productReview.entity";
import { Project } from "./project.entity";
import { ProjectReview } from "./projectReview.entity";
import { Transporter } from "./transporter.entity";
import { TransporterAction } from "./transporterAction.entity";
@ObjectType()
@Index("file_use_pkey", ["id"], { unique: true })
@Entity("file_use", { schema: "public" })
export class FileUse extends BaseModel {
  @Field(() => FileUseStatusEnum, { nullable: false })
  @Column({
    type: "enum",
    name: "status",
    enum: FileUseStatusEnum,
    nullable: false,
  })
  status: FileUseStatusEnum;

  @Field(() => FileUseTypeEnum, { nullable: false })
  @Column({
    type: "enum",
    name: "type",
    enum: FileUseTypeEnum,
    nullable: false,
  })
  type: FileUseTypeEnum;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_public", nullable: true })
  isPublic: boolean | null;

  @Field({ nullable: true })
  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  // relations

  @Field({ nullable: false })
  @Column({ type: "uuid", name: "file_id", nullable: false })
  fileId: string;

  @Field(() => File, { nullable: false })
  @OneToOne(() => File, (file) => file.fileUse, { nullable: false })
  @JoinColumn({
    name: "file_id",
    referencedColumnName: "id",
  })
  file: File;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "product_id", nullable: true })
  productId: string;

  @ManyToOne(() => Product, (product) => product.fileUses)
  @JoinColumn({
    name: "product_id",
    referencedColumnName: "id",
  })
  product?: Product;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "product_review_id", nullable: true })
  productReviewId?: string;

  @ManyToOne(() => ProductReview, (productReview) => productReview.fileUses)
  @JoinColumn({
    name: "product_review_id",
    referencedColumnName: "id",
  })
  productReview?: ProductReview;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "project_id", nullable: true })
  projectId: string;

  @ManyToOne(() => Project, (project) => project.fileUses)
  @JoinColumn({
    name: "project_id",
    referencedColumnName: "id",
  })
  project?: Project;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "project_review_id", nullable: true })
  projectReviewId?: string;

  @ManyToOne(() => ProjectReview, (projectReview) => projectReview.fileUses)
  @JoinColumn({
    name: "product_review_id",
    referencedColumnName: "id",
  })
  projectReview?: ProjectReview;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "transporter_id", nullable: true })
  transporterId: string;

  @ManyToOne(() => Transporter, (transporter) => transporter.fileUses)
  @JoinColumn({
    name: "transporter_id",
    referencedColumnName: "id",
  })
  transporter?: Transporter;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "transporter_action_id", nullable: true })
  transporterActionId: string;

  @ManyToOne(
    () => TransporterAction,
    (transporterAction) => transporterAction.fileUses
  )
  @JoinColumn({
    name: "transporter_action_id",
    referencedColumnName: "id",
  })
  transporterAction?: TransporterAction;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "producer_id", nullable: true })
  producerId: string;

  @ManyToOne(() => Producer, (producer) => producer.fileUses)
  @JoinColumn({
    name: "producer_id",
    referencedColumnName: "id",
  })
  producer?: Producer;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "producer_action_id", nullable: true })
  producerActionId: string;

  @ManyToOne(() => ProducerAction, (producerAction) => producerAction.fileUses)
  @JoinColumn({
    name: "producer_action_id",
    referencedColumnName: "id",
  })
  producerAction?: ProducerAction;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "event_action_id", nullable: true })
  eventActionId: string;

  @ManyToOne(() => EventAction, (eventAction) => eventAction.fileUses)
  @JoinColumn({
    name: "event_action_id",
    referencedColumnName: "id",
  })
  eventAction?: EventAction;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "customer_action_id", nullable: true })
  customerActionId: string;

  @ManyToOne(() => CustomerAction, (customerAction) => customerAction.fileUses)
  @JoinColumn({
    name: "customer_action_id",
    referencedColumnName: "id",
  })
  customerAction?: CustomerAction;

  @Field({ nullable: true })
  @Column({ type: "uuid", name: "call_id", nullable: true })
  callId: string;

  @ManyToOne(() => Call, (call) => call.fileUses)
  @JoinColumn({
    name: "call_id",
    referencedColumnName: "id",
  })
  call?: Call;
}
