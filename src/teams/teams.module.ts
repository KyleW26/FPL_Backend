import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TeamsRepository } from './repository/teams.repository';
import { TeamsController } from './application/teams.controller';
import { TeamsService } from './domain/teams.service';

@Module({
  imports: [],
  controllers: [TeamsController],
  providers: [TeamsRepository, TeamsService, PrismaClient],
})
export class TeamsModule {}
