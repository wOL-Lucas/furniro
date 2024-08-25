import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CepService } from './cep-api.service';

@Module({
  imports: [
    ConfigModule, 
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>('CEP_API_URL'),
        timeout: 5000,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [CepService],
  exports: [CepService],
})
export class CepModule {}

