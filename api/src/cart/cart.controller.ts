import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/auth/Decorators/user.decorator';
import { SignedUser } from 'src/auth/dto/signedUser.dto';
import { ParameterValidationPipe } from 'src/user/pipes/parameter-validation.pipe';
import { CreateCartDto } from './dtos/create-cart.dto';

@Controller('api/v1/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getCarts(@User() user: SignedUser) {
    return await this.cartService.getUserCarts(user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getCart(@Param('id', ParameterValidationPipe) id: number) {
    return await this.cartService.getCart(id);
  }

  @Get(':id/items')
  @UseGuards(JwtAuthGuard)
  async getCartItems(@Param('id', ParameterValidationPipe) id: number) {
    return await this.cartService.getCartItems(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  //@UsePipes(ValidationPipe)
  async createCart(@Body() dto: CreateCartDto, @User() user: SignedUser) {
    return dto;
    return await this.cartService.createCart(user.id, dto);
  }
}
