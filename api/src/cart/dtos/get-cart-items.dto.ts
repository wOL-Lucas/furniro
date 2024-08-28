import { ApiProperty } from "@nestjs/swagger";
import { CreateSkuDto } from "src/products/dto/create-sku.dto";

export class GetCartItemsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  product: CreateSkuDto;
}
