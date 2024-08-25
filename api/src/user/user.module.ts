import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserAddress } from './entities/address.entity';
import { UserAddressController } from './address.controller';
import { UserDetailsController } from './details.controller';
import { UserDetailsService } from './details.service';
import { UserAddressService } from './address.service';
import { UserDetails } from './entities/details.entity';
import { CepModule } from 'src/cep-api/cep-api.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserAddress, UserDetails]), CepModule],
  controllers: [UserController, UserAddressController, UserDetailsController],
  providers: [UserService, UserDetailsService, UserAddressService],
  exports: [UserService, UserDetailsService, UserAddressService]
})
export class UserModule {}
