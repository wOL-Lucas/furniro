import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, Min } from "class-validator";

export class CartItemDto {
  @ApiProperty()
  @IsNotEmpty()
  product: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;
}
