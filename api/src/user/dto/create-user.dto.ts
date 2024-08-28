import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'john.doe@example.com'})
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'JohnDoe12345!'})
  password: string;
}
