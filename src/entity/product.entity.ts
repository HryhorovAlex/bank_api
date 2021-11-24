import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductType } from './productType.entity';

@Entity()
export class Product {
  @PrimaryColumn()
  productCd: string;

  @Column()
  name: string;

  @ManyToOne(() => ProductType, (productType) => productType.productCdType)
  @JoinColumn({ name: 'productCdType' })
  productCdType: string;

  @Column()
  dateOffered: Date;

  @Column()
  dateRetired: Date;
}
