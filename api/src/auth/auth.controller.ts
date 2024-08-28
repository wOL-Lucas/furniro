import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { LocalGuard } from './guards/local.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('api/v1/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: AuthPayloadDto })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(LocalGuard)
  async login(@Body() authPayloadDto: AuthPayloadDto) {
    return this.authService.login(authPayloadDto);
  }
  
}
