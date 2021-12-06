import { Column, Entity, OneToMany } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';
import { Employee } from './employee.entity';

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

  @OneToMany(() => Employee, (employee) => employee.id)
  employee: Employee[];
}
