import { IsInt, IsOptional, IsString } from 'class-validator';
import { Category } from '../enum/category.enum';

export class GetProductsQueryDto {
  @IsOptional()
  @IsInt()
  showPerPage?: number;

  @IsOptional()
  @IsInt()
  offset?: number;

  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  category?: Category;
}

