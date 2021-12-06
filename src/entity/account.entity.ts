import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Branch } from './branch.entity';
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { Product } from './product.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.productCd)
  @JoinColumn({ name: 'productCd' })
  productCd: string;

  @OneToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'custId' })
  custId: number;

  @Column()
  openDate: Date;

  @Column({ nullable: true })
  closeDate: Date;

  @Column()
  lastActivityDate: Date;

  @Column()
  status: string;

  @OneToOne(() => Branch, (branch) => branch.id)
  @JoinColumn({ name: 'openBranchId' })
  openBranchId: number;

  @OneToOne(() => Employee, (employee) => employee.id)
  @JoinColumn({ name: 'openEmpId' })
  openEmpId: number;

  @Column('decimal', { precision: 2 })
  availBalance: number;

  @Column('decimal', { precision: 2 })
  pendingBalance: number;
}
