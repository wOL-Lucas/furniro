import { ApiProperty } from "@nestjs/swagger";
import { GetCartItemsDto } from "./get-cart-items.dto";
import { GetCartsDto } from "./get-carts.dto";

export class GetCartDto {
  @ApiProperty()
  cart: GetCartsDto;

  @ApiProperty({ isArray: true, type: GetCartItemsDto })
  items: GetCartItemsDto[];

  @ApiProperty()
  total: string;
}
