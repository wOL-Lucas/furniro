import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sku } from './sku.entity';
import { Category } from '../enum/category.enum';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Sku, sku => sku.product, { cascade: true, eager: true })
  skus: Sku[];

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  category: Category;
}
