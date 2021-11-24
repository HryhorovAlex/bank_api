import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customerId' })
  customerId: number;

  @Column()
  name: string;

  @Column()
  stateId: string;

  @Column()
  incorpDate: string;
}
