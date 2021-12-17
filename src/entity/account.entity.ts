import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Branch } from './branch.entity';
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { Product } from './product.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  openDate: Date;

  @Column({ nullable: true })
  closeDate: Date;

  @Column({ type: 'varchar' })
  lastActivityDate: Date;

  @Column()
  status: string;

  @Column('decimal', { precision: 2 })
  availBalance: number;

  @Column('decimal', { precision: 2 })
  pendingBalance: number;

  @ManyToMany(() => Product, (product) => product.id)
  @JoinTable()
  products: Product[];

  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customerId' })
  customerId: number;

  @ManyToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'openBranchId' })
  openBranchId: number;

  @ManyToOne(() => Employee, (employee) => employee.id)
  @JoinColumn({ name: 'openEmpId' })
  openEmpId: number;

  @OneToMany(() => Transaction, (transaction) => transaction.accountId)
  @JoinColumn({ name: 'transactions' })
  transactions: Transaction[];
}
