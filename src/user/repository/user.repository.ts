import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from '../../lib/dto';

@Injectable()
export class UserRepository {
  constructor(protected _prismaClient: PrismaClient) {}

  /**
   * @description: Function to fetch all users from the User table
   * @param: None
   * @returns
   */
  async getAllUsers(): Promise<any> {
    try {
      return await this._prismaClient.user.findMany();
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description: Function to create a new user
   * @param: None
   * @returns
   */
  async createUser(dto: CreateUserDto): Promise<any> {
    try {
      return await this._prismaClient.user.create({
        data: {
          ...dto,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
