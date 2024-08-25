import { Controller, Body, Post, Get, Patch, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserAddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { User } from 'src/auth/Decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { SignedUser } from 'src/auth/dto/signedUser.dto';

@Controller('api/v1/users/address')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}


  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  create(@User() user:SignedUser, @Body() createAddressDto: CreateAddressDto) {
    return this.userAddressService.create(user.id, createAddressDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAddress(@User() user: SignedUser) {  
    return this.userAddressService.getAddress(user.id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  updateAddress(@User() user: SignedUser, @Body() createAddressDto: CreateAddressDto) {
    this.userAddressService.deleteAddress(user.id);
    return this.userAddressService.updateAddress(user.id, createAddressDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deleteAddress(@User() user: SignedUser){
    return this.userAddressService.deleteAddress(user.id);
  }
}

