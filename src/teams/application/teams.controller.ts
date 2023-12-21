import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TeamsService } from '../domain/teams.service';
import { CreateTeamDto, EditTeamDto } from 'src/lib/dto';

@Controller('/api/teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  /**
   * @description: Function to retrieve all teams
   * @param
   * @returns
   */
  @Get('getAll')
  async getAllTeams() {
    return await this.teamsService.getAllTeams();
  }

  /**
   * @description: Function to retrieve a single team
   * @param: id
   * @returns
   */
  @Get('getOne/:id')
  async getSingleTeam(@Param('id', ParseIntPipe) id: number) {
    return await this.teamsService.getSingleTeam(id);
  }

  /**
   * @description: Function to create a new team
   * @param: body
   * @returns
   */
  @Post('/create')
  async createTeam(@Body() body: CreateTeamDto) {
    return await this.teamsService.createTeam(body);
  }

  /**
   * @description: Function to edit an existing team
   * @param: id, body
   * @returns
   */
  @Patch('edit/:id')
  async editTeam(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: EditTeamDto,
  ) {
    return await this.teamsService.editTeam(id, body);
  }

  /**
   * @description: Function to delete an existing team
   * @param: id
   */
  @Delete('/:id')
  async deleteTeam(@Param('id', ParseIntPipe) id: number) {
    return await this.teamsService.deleteTeam(id);
  }
}
