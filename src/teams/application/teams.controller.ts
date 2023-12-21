import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { TeamsService } from '../domain/teams.service';
import { EditTeamDto } from 'src/lib/dto';

@Controller('/api/teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get('getAll')
  async getAllTeams() {
    return await this.teamsService.getAllTeams();
  }

  @Patch('edit/:id')
  async editTeam(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: EditTeamDto,
  ) {
    return await this.teamsService.editTeam(id, body);
  }
}
