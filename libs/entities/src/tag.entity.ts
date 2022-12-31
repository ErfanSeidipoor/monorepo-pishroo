import { Column, Entity, Index, OneToOne } from 'typeorm';
import BaseModel from './baseModel.entity';
import { TagUse } from './tagUse.entity';

@Index('tag_pkey', ['id'], { unique: true })
@Entity('tag', { schema: 'public' })
export class Tag extends BaseModel {
  @Column('varchar', { name: 'name', nullable: false, length: 100 })
  name: string | null;

  @Column('boolean', { name: 'is_active', nullable: true })
  isActive: boolean | null;

  @OneToOne(() => TagUse, (tagUse) => tagUse.tag)
  tagUse?: TagUse;
}
