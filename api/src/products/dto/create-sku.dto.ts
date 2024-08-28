import { ApiProperty } from "@nestjs/swagger";
import { Size } from "../enum/size.enum";

export class CreateSkuDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  size: Size;

  @ApiProperty()
  color: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  discountPercentage: number;

  @ApiProperty({ default: false })
  isNewProduct: boolean;
}

