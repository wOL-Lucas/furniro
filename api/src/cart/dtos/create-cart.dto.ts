import { User } from "src/user/entities/user.entity";
import { CartItemDto } from "./create-item.dto";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateCartDto {
  owner?: User;
  
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  products: CartItemDto[];
}
