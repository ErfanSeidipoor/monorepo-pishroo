import { IsString, IsUUID } from "class-validator";

export class GetCityByIdAdminArgs {
  @IsString()
  @IsUUID()
  cityId: string;
}
