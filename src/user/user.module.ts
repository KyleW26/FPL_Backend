import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserService } from './domain/user.service';
import { UserController } from './application/user.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, UserService, PrismaClient],
})
export class UserModule {}
