import { Category } from '../enum/category.enum';
import { CreateSkuDto } from './create-sku.dto';

export class CreateProductDto {
  name: string;
  category: Category;
  skus: CreateSkuDto[];
}
