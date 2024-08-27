import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { CreateCartDto } from './dtos/create-cart.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CartService {
  
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}


  async createCart(userId: number, dto: CreateCartDto){
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
    return await this.cartRepository.findOneBy({ id });
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
