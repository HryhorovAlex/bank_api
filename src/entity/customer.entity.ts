import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12 })
  fedId: string;

  @Column({ length: 2 })
  custTypeCd: string;

  @Column()
  adress: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postalCode: string;
}
