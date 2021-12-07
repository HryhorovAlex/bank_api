import { Fixture } from 'class-fixtures-factory';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { IdNameColumns } from '../db/shared-columns';
import { Employee } from './employee.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Branch extends IdNameColumns {
  @Column({ length: 30 })
  @Fixture((faker) => faker.address.streetName())
  address: string;

  @Column({ length: 20 })
  @Fixture((faker) => faker.address.city())
  city: string;

  @Column({ length: 2 })
  @Fixture((faker) => faker.address.state(true))
  state: string;

  @Column({ length: 12 })
  @Fixture((faker) => faker.address.zipCode())
  zip: string;

  @OneToMany(() => Employee, (employee) => employee.id)
  employee: Employee[];

  @OneToMany(() => Transaction, (transaction) => transaction.executionBranchId)
  @JoinColumn({ name: 'transactions' })
  transactions: Transaction[];
}
