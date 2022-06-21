import { Column, Entity, Index } from 'typeorm';
import BaseModel from './baseModel.entity';

@Index('text_pkey', ['id'], { unique: true })
@Entity('text', { schema: 'public' })
export class Text extends BaseModel {
  @Column('varchar', { name: 'key', nullable: false, length: 250 })
  key: string | null;

  @Column('varchar', { name: 'value', nullable: false, length: 500 })
  value: string | null;
}
