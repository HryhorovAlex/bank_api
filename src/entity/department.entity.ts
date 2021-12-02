import { Entity } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';

@Entity()
export class Department extends IdNameColumns {
  // @OneToMany(() => Employee, (employee) => employee.deptId)
  // employee: Employee[];
}
