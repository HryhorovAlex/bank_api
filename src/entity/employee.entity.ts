import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Branch } from './branch.entity';
import { Department } from './department.entity';

@Entity()
export class Employee extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stateDate: Date;

  @Column()
  endDate: Date;

  // @ManyToMany(() => Employee, (employee) => employee.id)
  // @JoinTable()
  @Column()
  superiorEmp: number;

  @ManyToOne(() => Department, (department) => department.id)
  dept: number;

  @Column()
  title: string;

  @ManyToOne(() => Branch, (branch) => branch.id)
  assignedBranch: number;
}
