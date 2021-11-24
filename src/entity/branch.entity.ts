import { Column, Entity } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';

@Entity()
export class Branch extends IdNameColumns {
  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;
}
