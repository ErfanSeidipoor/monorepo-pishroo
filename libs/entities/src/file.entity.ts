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

@Index('file_pkey', ['id'], { unique: true })
@Entity('file', { schema: 'public' })
export class File extends BaseModel {
  @Column('varchar', {
    name: 'encoding',
    nullable: false,
    unique: false,
    length: 15,
  })
  encoding: string;

  @Column('varchar', {
    name: 'mimetype',
    nullable: false,
    unique: false,
    length: 100,
  })
  mimetype: string;

  @Column('varchar', {
    name: 'destination',
    nullable: false,
    unique: false,
    length: 30,
  })
  destination: string;

  @Column('varchar', {
    name: 'filename',
    nullable: false,
    unique: true,
    length: 50,
  })
  filename: string;

  @Column('varchar', {
    name: 'path',
    nullable: false,
    unique: true,
    length: 70,
  })
  path: string;

  @Column('integer', { name: 'size', nullable: false, unique: false })
  size: number;

  @Column('boolean', {
    name: 'is_used',
    nullable: true,
    unique: false,
    default: false,
  })
  isUsed?: boolean;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user?: User;

  @OneToOne(() => FileUse, (fileUse) => fileUse.file)
  fileUse?: FileUse;
}
