import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { FullNameColumns } from '../db/shared-columns';

@Entity()
export class User extends FullNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;
}
