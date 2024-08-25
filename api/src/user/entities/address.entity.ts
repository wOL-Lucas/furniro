import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  @Exclude({ toPlainOnly: true })
  id: number;

  @Column()
  @IsString()
  zipCode: string;

  @Column({ nullable: true })
  @IsString()
  country?: string;

  @Column({ nullable: true })
  @IsString()
  street?: string;

  @Column({ nullable: true })
  @IsString()
  city?: string;

  @Column({ nullable: true })
  @IsString()
  province?: string;

  @Column({ nullable: true })
  @IsString()
  addon?: string;

  @OneToOne(() => User, user => user.address)
  @JoinColumn({ name: 'userId' })
  @Exclude({ toPlainOnly: true })
  user: User;

}
