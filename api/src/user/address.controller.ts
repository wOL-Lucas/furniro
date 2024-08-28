import { Controller, Body, Post, Get, Patch, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserAddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { User } from 'src/auth/Decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { SignedUser } from 'src/auth/dto/signedUser.dto';
import { UpdateUserAddress } from './dto/update-address.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('User Address')
@Controller('api/v1/users/address')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}


  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create Address' })
  @ApiSecurity('jwt')
  @ApiBody({ type: CreateAddressDto })
  @ApiResponse({ status: 201, description: 'Address created' })
  @ApiResponse({ status: 400, description: 'Bad request, verify the zipcode' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@User() user:SignedUser, @Body() createAddressDto: CreateAddressDto) {
    return this.userAddressService.create(user.id, createAddressDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get Address' })
  @ApiSecurity('jwt')
  @ApiResponse({ status: 200, description: 'Address found', type: CreateAddressDto })
  @ApiResponse({ status: 404, description: 'Address not found'})
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getAddress(@User() user: SignedUser) {  
    return this.userAddressService.getAddress(user.id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Update Address' })
  @ApiSecurity('jwt')
  @ApiBody({ type: CreateAddressDto })
  @ApiResponse({ status: 200, description: 'Address updated', type: CreateAddressDto })
  @ApiResponse({ status: 404, description: 'Address not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  updateAddress(@User() user: SignedUser, @Body() updateAddressDto: UpdateUserAddress) {
    return this.userAddressService.updateAddress(user.id, updateAddressDto);
  }
}

