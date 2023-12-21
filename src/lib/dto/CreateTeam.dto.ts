import { IsNumber, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  teamName: string;

  @IsString()
  teamCity: string;

  @IsNumber()
  manager: number;

  @IsString()
  stadium: string;
}
