import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductType {
  @PrimaryColumn()
  productCdType: string;

  @Column()
  name: string;
}
