import { BadRequestException, Injectable } from '@nestjs/common';
import { TeamsRepository } from '../repository/teams.repository';
import { CreateTeamDto, EditTeamDto } from 'src/lib/dto';

@Injectable()
export class TeamsService {
  constructor(private readonly _teamsRepository: TeamsRepository) {}

  // Function to list all teams within the teams table
  async getAllTeams() {
    const teams = await this._teamsRepository.getAllTeams();

    if (!teams) {
      throw new BadRequestException('Unable to find any teams.');
    }

    return teams;
  }

  // Function to get a single team from within the Teams table
  async getSingleTeam(id: number) {
    const team = await this._teamsRepository.getTeam(id);

    if (!team) {
      throw new BadRequestException('Unable to find a team');
    }

    return team;
  }

  // Function to edit a team in the teams table
  async editTeam(id: number, dto: EditTeamDto) {
    const teamToEdit = await this._teamsRepository.getTeam(id);

    if (!teamToEdit) {
      throw new BadRequestException("That team doesn't exist");
    }

    return this._teamsRepository.editTeam(id, dto);
  }

  // Function to create a team in the teams table
  async createTeam(dto: CreateTeamDto) {
    return await this._teamsRepository.createTeam(dto);
  }
}
