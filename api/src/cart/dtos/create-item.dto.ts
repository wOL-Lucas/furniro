import { IsInt, IsNotEmpty, Min } from "class-validator";

export class CartItemDto {
  @IsNotEmpty()
  product: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;
}
