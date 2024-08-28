import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { CreateCartDto } from './dtos/create-cart.dto';
import { User } from 'src/user/entities/user.entity';
import { Sku } from 'src/products/entities/sku.entity';

@Injectable()
export class CartService {
  
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Sku)
    private skuRepository: Repository<Sku>
  ) {}


  async createCart(userId: number, dto: CreateCartDto){
    const user = await this.userRepository.findOneBy({ id: userId });
    const cart = this.cartRepository.create({
      owner: user
    });

    await this.cartRepository.save(cart);
    for (const item of dto.products) {

      const sku = await this.skuRepository.findOneBy({ code: item.product });

      const cartItem = this.cartItemRepository.create(
        {
          cart,
          product: sku,
          quantity: item.quantity,
        }
      );

      sku.stock -= item.quantity;
      await this.skuRepository.save(sku);


      await this.cartItemRepository.save(cartItem);
    }

    return cart;
  }

  async getUserCarts(userId: number){
    return await this.cartRepository.find({
      where: {
        owner: {
          id: userId
        }
      }
    });
  }

  async getCart(id: number){
    const cart = await this.cartRepository.findOneBy({ id });
    const items = await this.cartItemRepository.find({
      where: {
        cart: {
          id
        }
      },
      relations: ['product']
    });

    const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    return {
      cart,
      items,
      total: total.toFixed(2)
    };
  }

  async getCartItems(cartId: number) {
    return await this.cartItemRepository.find({
      where: {
        cart: {
          id: cartId
        }
      },
      relations: ['product']
    });
  }

}
