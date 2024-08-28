import { ApiProperty } from "@nestjs/swagger";

export class GetCartsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;
}
