import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAddressDto {
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  zipCode: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  country: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  street: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  city: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  province: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  addon: string;

}
