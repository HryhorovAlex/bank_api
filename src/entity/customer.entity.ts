import { Fixture } from 'class-fixtures-factory';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12 })
  @Fixture((faker) => faker.phone.phoneNumber())
  phoneNumber: string;

  @Column()
  @Fixture((faker) => faker.address.streetName())
  street: string;

  @Column()
  @Fixture((faker) => faker.address.city())
  city: string;

  @Column()
  @Fixture((faker) => faker.address.state())
  state: string;

  @Column()
  @Fixture((faker) => faker.address.zipCode())
  postalCode: string;

  @OneToMany(() => Account, (account) => account.customerId)
  @JoinColumn({ name: 'accounts' })
  accounts: Account[];
}
