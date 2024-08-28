import { ApiProperty } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";

export class GetProductsDto {
  @ApiProperty({ isArray: true, type: CreateProductDto })
  products: CreateProductDto[];

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  shownItems: number;

  @ApiProperty()
  currentPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  showPerPage: number;
}
