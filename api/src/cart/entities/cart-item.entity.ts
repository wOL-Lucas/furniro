import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Cart } from './cart.entity';
import { Sku } from 'src/products/entities/sku.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @ManyToOne(() => Cart, cart => cart.products)
  cart: Cart;

  @ManyToOne(() => Sku, { createForeignKeyConstraints: false, eager: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'code' })
  product: Sku;

  @Column()
  quantity: number;
}
