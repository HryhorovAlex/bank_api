import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12 })
  fedId: string;

  @Column({ length: 2 })
  customerTypeCd: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postalCode: string;

  @OneToMany(() => Account, (account) => account.customerId)
  @JoinColumn({ name: 'accounts' })
  accounts: Account[];
}
