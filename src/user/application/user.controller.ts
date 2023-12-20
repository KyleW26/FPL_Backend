import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../lib/dto';
import { UserService } from '../domain/user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAll')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
  @Post('/createNew')
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.createUser(body);
  }
}
