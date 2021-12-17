import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Customer } from './customer.entity';

@Entity()
export class Individual extends FullNameColumns {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customerId' })
  customerId: number;

  @Column({ type: 'varchar' })
  birthDate: Date;
}
