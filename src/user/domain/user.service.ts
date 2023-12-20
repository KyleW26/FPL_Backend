import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../lib/dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  // Function to list all users within the users table
  async getAllUsers() {
    const users = await this._userRepository.getAllUsers();

    if (!users) {
      throw new BadRequestException('Unable to find any users.');
    }

    return users;
  }

  // Function to create a user within the users table
  async createUser(dto: CreateUserDto) {
    return await this._userRepository.createUser(dto);
  }
}
