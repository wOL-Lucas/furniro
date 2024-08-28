import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAddress } from './entities/address.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { CepService } from 'src/cep-api/cep-api.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddress)
    private userAddressRepository: Repository<UserAddress>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly cepService: CepService,
  ) {}

  async create(userId: number, createAddressDto: CreateAddressDto) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (!createAddressDto.city || !createAddressDto.country || !createAddressDto.street || !createAddressDto.province) {
      const address = await lastValueFrom(this.cepService.getData(createAddressDto.zipCode));
      createAddressDto.city = address.localidade || null;
      createAddressDto.country = 'Brasil';
      createAddressDto.street = address.logradouro || null;
      createAddressDto.province = address.uf;
    }

    const address = this.userAddressRepository.create({
      ...createAddressDto,
      user,
    });

    await this.userAddressRepository.save(address);

    user.address = address;
    await this.userRepository.save(user);

    return await this.userAddressRepository.findOne({ where: { user: { id: userId } } });
  }

  async getAddress(userId: number){
    return this.userAddressRepository.findOne({ where: { user: { id: userId } } });
  }

  async updateAddress(userId: number, createAddressDto: CreateAddressDto){
    return await this.create(userId, createAddressDto);
  }
  
  async deleteAddress(userId: number){
    return this.userAddressRepository.delete({ user: { id: userId } });
  }

}
