import { Size } from "./size.enum";

export class CreateSkuDto {
  code: string;
  size: Size;
  color: string;
  price: number;
  description: string;
  stock: number;
  image: string;
  discountPercentage: number;
  isNewProduct: boolean;
}

