import { IsBooleanString, IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Size } from "../dto/size.enum";
import { Product } from "./product.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Sku {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  code: string;

  @Column()
  @IsString()
  size: Size;

  @Column()
  @IsString()
  color: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsNumber()
  price: number;

  @Column()
  @IsString()
  description: string;

  @Column()
  @IsString()
  stock: number;

  @Column()
  @IsString()
  image: string;

  @Column({ nullable: true, type: 'integer' })
  @IsNumber()
  discountPercentage: number;

  @Column({ nullable: true, type: 'bool' })
  @IsBooleanString()
  isNewProduct: boolean;

  @Exclude({ toPlainOnly: true })
  @ManyToOne(() => Product, product => product.skus)
  product: Product;

}
