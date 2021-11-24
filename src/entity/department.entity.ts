import { Entity, OneToMany } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';
import { Employee } from './employee.entity';

@Entity()
export class Department extends IdNameColumns {
  // @OneToMany(() => Employee, (employee) => employee.deptId)
  // employee: Employee[];
}
