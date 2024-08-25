import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDetails } from './entities/details.entity';
import { CreateUserDetailsDto } from './dto/create-details.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class UserDetailsService {

  constructor(
    @InjectRepository(UserDetails)
    private userDetailsRepository: Repository<UserDetails>,
    
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}


  async create(userId: number, userDetails: CreateUserDetailsDto) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const newUserDetails = this.userDetailsRepository.create(userDetails);
    newUserDetails.user = user;

    user.details = newUserDetails;
    await this.userRepository.save(user);

    return this.userDetailsRepository.save(newUserDetails);
  }

  async findAll(userId: number) {
    return this.userDetailsRepository.find({ where: { user: { id: userId } } });
  }

  async update(userId: number, userDetails: CreateUserDetailsDto) {
    this.remove(userId);
    return this.create(userId, userDetails);
  }

  async remove(userId: number) {
    return this.userDetailsRepository.delete({ user: { id: userId } });
  }
}
