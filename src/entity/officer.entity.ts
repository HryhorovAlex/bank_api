import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';
import { Business } from './business.entity';

@Entity()
export class Officer extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Business, (business) => business.customerId)
  @JoinColumn({ name: 'customerId' })
  customerId: number;

  @Column()
  title: string;

  @Column({ type: 'varchar' })
  startDate: Date;

  @Column({ nullable: true, type: 'date' })
  endDate: Date | null;
}
