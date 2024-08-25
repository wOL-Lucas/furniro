import { Controller, Get, Post, Body, Patch, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/auth/Decorators/user.decorator';
import { SignedUser } from 'src/auth/dto/signedUser.dto';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findOne(@User() user: SignedUser){
    return this.userService.findOne(user.id);
  }

  @Patch()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  update(@Body() updateUserDto: UpdateUserDto, @User() user: SignedUser) {
    return this.userService.update(user.id, updateUserDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  remove(@User() user: SignedUser) {
    return this.userService.remove(user.id);
  }
}
