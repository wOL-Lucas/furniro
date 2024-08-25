import { IsOptional, IsString } from 'class-validator';

export class CreateUserDetailsDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  companyName: string;
}

