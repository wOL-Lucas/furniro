import { User } from "src/user/entities/user.entity";
import { CartItemDto } from "./create-item.dto";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  owner?: User;
  
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  @ApiProperty({ isArray: true, type: CartItemDto })  
  products: CartItemDto[];
}
