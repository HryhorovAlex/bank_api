import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';
import { Branch } from './branch.entity';
import { Employee } from './employee.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double')
  amount: number;

  @ManyToOne(() => Employee, (employee) => employee.id)
  @JoinColumn({ name: 'tellerEmpId' })
  tellerEmpId: number;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'accountId' })
  accountId: number;

  @ManyToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'executionBranchId' })
  executionBranchId: number;
}
