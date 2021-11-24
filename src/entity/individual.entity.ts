import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Customer } from './customer.entity';

@Entity()
export class Individual extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'custId' })
  custId: number;

  @Column()
  birthDate: Date;
}
