import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';
import { Branch } from './branch.entity';
import { Employee } from './employee.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: 'accountId' })
  accountId: number;

  @Column()
  txnTypeCd: string;

  @Column('double')
  amount: number;

  @OneToOne(() => Employee, (employee) => employee.id)
  @JoinColumn({ name: 'tellerEmpId' })
  tellerEmpId: number;

  @ManyToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'executionBranchId' })
  executionBranchId: number;

  @Column('datetime')
  fundsAvailDate: Date;
}
