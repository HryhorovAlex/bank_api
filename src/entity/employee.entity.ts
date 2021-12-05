import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Branch } from './branch.entity';
import { Department } from './department.entity';

@Entity()
export class Employee extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stateDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @ManyToOne((_) => Employee)
  @JoinColumn({ name: 'superiorEmp' })
  superiorEmp: number;

  // @Column({ nullable: true })
  // deptId: number;

  // @ManyToOne(() => Department, { eager: true })
  @ManyToOne(() => Department, (department) => department.id)
  @JoinColumn({ name: 'dept' })
  dept: number;

  @Column()
  title: string;

  @ManyToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'assignedBranch' })
  assignedBranch: number;
}
