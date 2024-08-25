import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: AuthPayloadDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(payload.username);
    if (user && user.password === payload.password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: AuthPayloadDto) {
    console.log(user.username)
    const foundUser = await this.validateUser(user);
    const payload = { email: foundUser.email, sub: foundUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

