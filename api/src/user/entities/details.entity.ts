import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';


@Entity()
export class UserDetails {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @OneToOne(() => User, user => user.details)
  @JoinColumn({ name: 'userId' })
  @Exclude({ toPlainOnly: true })
  user: User;

  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column()
  @IsOptional()
  @IsString()
  companyName: string;
}


