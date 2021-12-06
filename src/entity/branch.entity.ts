import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';
import { Employee } from './employee.entity';
import { Transaction } from './transaction.entity';

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

  @OneToMany(() => Transaction, (transaction) => transaction.executionBranchId)
  @JoinColumn({ name: 'transactions' })
  transactions: Transaction[];
}
