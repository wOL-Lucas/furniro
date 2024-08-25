import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    var foundUser = await this.userRepository.findOneBy({ email: createUserDto.email });
    if (foundUser) {
      throw new BadRequestException('User already exists');
    }

    return this.userRepository.save(createUserDto);
  }

  async findOne(id: number) {
    const { password, ...result } = await this.userRepository.findOne({
      where: { id },
      relations: ['address', 'details']
    });
    return result;
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
