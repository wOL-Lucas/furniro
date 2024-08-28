import { Controller, Post, Body, Patch, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/auth/Decorators/user.decorator';
import { SignedUser } from 'src/auth/dto/signedUser.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiResponse({ status: 400, description: 'User already registered, or missing body data' })
  @ApiBody({ type: CreateUserDto })
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiResponse({ status: 400, description: 'User not found' })
  @ApiBody({ type: CreateUserDto })
  @ApiSecurity('jwt')
  update(@Body() updateUserDto: UpdateUserDto, @User() user: SignedUser) {
    return this.userService.update(user.id, updateUserDto);
  }
}
