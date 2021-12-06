import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductType {
  @PrimaryColumn({ length: 10 })
  productTypeCd: string;

  @Column({ length: 50 })
  name: string;
}
