import { BadRequestException, Injectable } from '@nestjs/common';
import { TeamsRepository } from '../repository/teams.repository';
import { EditTeamDto } from 'src/lib/dto';

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

  // Function to edit a team in the teams table
  async editTeam(id: number, dto: EditTeamDto) {
    const teamToEdit = await this._teamsRepository.getTeam(id);

    if (!teamToEdit) {
      throw new BadRequestException("That team doesn't exist");
    }

    return this._teamsRepository.editTeam(id, dto);
  }
}
