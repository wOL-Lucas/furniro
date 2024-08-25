import { Controller, Get, Post, Body, Patch, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDetailsDto } from './dto/create-details.dto';
import { UserDetailsService } from './details.service';
import { User } from 'src/auth/Decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { SignedUser } from 'src/auth/dto/signedUser.dto';

@Controller('api/v1/users/details/')
export class UserDetailsController {

  constructor(private readonly userDetailsService: UserDetailsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  create(@User() user:SignedUser, @Body() createUserDetailsDto: CreateUserDetailsDto) {
    return this.userDetailsService.create(user.id, createUserDetailsDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@User() user:SignedUser) {
    return this.userDetailsService.findAll(user.id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  update(@User() user:SignedUser, @Body() createUserDetailsDto: CreateUserDetailsDto) {
    return this.userDetailsService.update(user.id, createUserDetailsDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  remove(@User() user:SignedUser){
    return this.userDetailsService.remove(user.id);
  }
}

