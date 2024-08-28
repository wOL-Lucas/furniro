import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../enum/category.enum';
import { CreateSkuDto } from './create-sku.dto';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  category: Category;
  
  @ApiProperty({ isArray: true, type: CreateSkuDto })
  skus: CreateSkuDto[];
}
