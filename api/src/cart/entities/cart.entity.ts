import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { User } from 'src/user/entities/user.entity';
import { CartItem } from './cart-item.entity';

@Entity({
  name: 'carts'
})
export class Cart {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @ManyToOne(() => User, user => user.carts, { cascade: false })
  owner: User;

  @OneToMany(() => CartItem, cartItem => cartItem.cart, { cascade: true })
  products: CartItem[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
