import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserDetails } from './details.entity';
import { UserAddress } from './address.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Exclude, Transform } from 'class-transformer';

@Entity({
  name: 'users'
})
export class User {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => UserDetails, details => details.user, { cascade: false })
  @JoinColumn()
  @Exclude({ toPlainOnly: true })
  details: UserDetails;

  @OneToOne(() => UserAddress, address => address.user, { cascade: false })
  @JoinColumn()
  address: UserAddress;

  @OneToMany(() => Cart, cart => cart.owner, { cascade: false })
  @Exclude({ toPlainOnly: true })
  carts: Cart[];
}
