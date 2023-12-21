import { IsNumber, IsString } from 'class-validator';

export class EditTeamDto {
  @IsString()
  teamName: string;

  @IsString()
  teamCity: string;

  @IsNumber()
  manager: number;

  @IsString()
  stadium: string;
}
