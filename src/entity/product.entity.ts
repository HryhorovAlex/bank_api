import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductType } from './productType.entity';

@Entity()
export class Product {
  @PrimaryColumn({ length: 10 })
  productCd: string;

  @Column()
  name: string;

  @ManyToOne(() => ProductType, (productType) => productType.productTypeCd)
  @JoinColumn({ name: 'productTypeCd' })
  productTypeCd: string;

  @Column()
  dateOffered: Date;

  @Column()
  dateRetired: Date;
}
