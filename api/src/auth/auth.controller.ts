import { Controller, Body, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthPayloadDto } from './dto/auth.dto';
import { LocalGuard } from './guards/local.guard';
import { User } from './Decorators/user.decorator';

@Controller('api/v1/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(JwtAuthGuard)
  async test(@User() user: any) {
    return {
      message: 'Login successful',
      user
    } 
  }

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Body() authPayloadDto: AuthPayloadDto) {
    return this.authService.login(authPayloadDto);
  }
  
}
