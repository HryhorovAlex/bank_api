import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Account } from './account.entity';
import { Branch } from './branch.entity';
import { Department } from './department.entity';

@Entity()
export class Employee extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  stateDate: Date;

  @Column({ nullable: true })
  endDate?: Date;

  @Column()
  title: string;

  @ManyToOne((_) => Employee)
  @JoinColumn({ name: 'superiorEmp' })
  superiorEmp: number;

  @ManyToOne(() => Department, (department) => department.id)
  @JoinColumn({ name: 'dept' })
  dept: number;

  @ManyToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'assignedBranch' })
  assignedBranch: number;

  @OneToMany(() => Account, (account) => account.openEmpId)
  @JoinColumn({ name: 'openedAccount' })
  openedAccount: Account[];
}
