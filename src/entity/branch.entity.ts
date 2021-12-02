import { Column, Entity } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';

@Entity()
export class Branch extends IdNameColumns {
  @Column({ length: 30 })
  address: string;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 12 })
  zip: string;
}
