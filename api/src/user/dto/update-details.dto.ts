import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDetailsDto } from './create-details.dto';

export class UpdateUserDetailsDto extends PartialType(CreateUserDetailsDto) {}
