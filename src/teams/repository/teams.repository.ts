import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EditTeamDto } from 'src/lib/dto';

@Injectable()
export class TeamsRepository {
  constructor(protected _prismaClient: PrismaClient) {}

  /**
   * @description: Function to fetch all teams from the Teams table
   * @param: None
   * @returns
   */
  async getAllTeams(): Promise<any> {
    try {
      return await this._prismaClient.teams.findMany();
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description: Function to fetch a specific team from the Teams table
   * @param: teamId
   * @returns: Team
   */
  async getTeam(teamId: number): Promise<any> {
    try {
      return await this._prismaClient.teams.findUnique({
        where: {
          id: teamId,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description: Function to update a team in the Teams table
   * @param: teamId
   * @returns: UpdatedTeam
   */
  async editTeam(teamId: number, dto: EditTeamDto) {
    try {
      const updatedTeam = await this._prismaClient.teams.update({
        where: {
          id: teamId,
        },
        data: {
          ...dto,
        },
      });

      if (!updatedTeam) {
        throw new BadRequestException('Unable to update specified user');
      }

      return updatedTeam;
    } catch (error) {
      throw error;
    }
  }
}
