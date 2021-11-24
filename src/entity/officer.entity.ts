import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Business } from './business.entity';

@Entity()
export class Officer extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Business, (business) => business.customerId)
  @JoinColumn({ name: 'customerId' })
  customerId: number;

  @Column()
  title: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
