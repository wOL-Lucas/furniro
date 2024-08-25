import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

export class ParameterValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!value) {
      throw new BadRequestException(`The value of ${metadata.data} must be informed`);
    }
    return value;
  }
}
