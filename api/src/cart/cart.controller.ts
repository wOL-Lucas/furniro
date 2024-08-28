import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/auth/Decorators/user.decorator';
import { SignedUser } from 'src/auth/dto/signedUser.dto';
import { ParameterValidationPipe } from 'src/user/pipes/parameter-validation.pipe';
import { CreateCartDto } from './dtos/create-cart.dto';
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GetCartsDto } from './dtos/get-carts.dto';
import { GetCartItemsDto } from './dtos/get-cart-items.dto';
import { GetCartDto } from './dtos/get-cart.dto';

@ApiTags('Cart')
@Controller('api/v1/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all user carts' })
  @ApiResponse({ status: 200, description: 'Return all user carts', type: [GetCartsDto] })
  async getCarts(@User() user: SignedUser) {
    return await this.cartService.getUserCarts(user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get a cart' })
  @ApiSecurity('jwt')
  @ApiResponse({ status: 200, description: 'Return a cart', type: GetCartDto })
  @ApiResponse({ status: 404, description: 'Cart not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getCart(@Param('id', ParameterValidationPipe) id: number) {
    return await this.cartService.getCart(id);
  }

  @Get(':id/items')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all items from a cart' })
  @ApiSecurity('jwt')
  @ApiResponse({ status: 200, description: 'Return all items from a cart', type: [GetCartItemsDto]})
  async getCartItems(@Param('id', ParameterValidationPipe) id: number) {
    return await this.cartService.getCartItems(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Create a new cart' })
  @ApiResponse({ status: 201, description: 'Return the created cart', type: CreateCartDto })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiSecurity('jwt')
  async createCart(@Body() dto: CreateCartDto, @User() user: SignedUser) {
    return await this.cartService.createCart(user.id, dto);
  }
}
