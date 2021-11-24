import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class FullNameColumns {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

export class IdNameColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
