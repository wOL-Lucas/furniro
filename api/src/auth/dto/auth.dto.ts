import { ApiProperty } from "@nestjs/swagger";

export class AuthPayloadDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
