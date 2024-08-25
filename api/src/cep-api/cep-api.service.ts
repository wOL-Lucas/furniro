import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { CepResponseDto } from './dto/cep-response.dto';
import { Observable } from 'rxjs';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  getData(cep: string): Observable<CepResponseDto> {
    return this.httpService.get('/' + cep + '/json/').pipe(
      map((response) => response.data),
      catchError(() => {
        throw new BadRequestException('Zip code not found');
      })
    );
  }
}

