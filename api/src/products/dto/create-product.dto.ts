import { CreateSkuDto } from './create-sku.dto';

export class CreateProductDto {
  name: string;
  skus: CreateSkuDto[];
}
