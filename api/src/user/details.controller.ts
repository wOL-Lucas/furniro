import { Controller, Get, Post, Body, Patch, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDetailsDto } from './dto/create-details.dto';
import { UserDetailsService } from './details.service';
import { User } from 'src/auth/Decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { SignedUser } from 'src/auth/dto/signedUser.dto';
import { UpdateUserDetailsDto } from './dto/update-details.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('User Details')
@Controller('api/v1/users/details/')
export class UserDetailsController {

  constructor(private readonly userDetailsService: UserDetailsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @ApiSecurity('jwt')
  @ApiOperation({ summary: 'Create Details' })
  @ApiResponse({ status: 201, description: 'Details created', type: CreateUserDetailsDto })
  @ApiResponse({ status: 400, description: 'Bad request, verify the details' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@User() user:SignedUser, @Body() createUserDetailsDto: CreateUserDetailsDto) {
    return this.userDetailsService.create(user.id, createUserDetailsDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('jwt')
  @ApiOperation({ summary: 'Get Details' })
  @ApiResponse({ status: 200, description: 'Details found', type: CreateUserDetailsDto})
  @ApiResponse({ status: 404, description: 'Details not found'})
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(@User() user:SignedUser) {
    return this.userDetailsService.findAll(user.id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @ApiSecurity('jwt')
  @ApiOperation({ summary: 'Update Details' })
  @ApiBody({ type: CreateUserDetailsDto })
  @ApiResponse({ status: 200, description: 'Details updated', type: CreateUserDetailsDto })
  @ApiResponse({ status: 404, description: 'Details not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  update(@User() user:SignedUser, @Body() updateUserDetailsDto: UpdateUserDetailsDto) {
    return this.userDetailsService.update(user.id, updateUserDetailsDto);
  }
}

