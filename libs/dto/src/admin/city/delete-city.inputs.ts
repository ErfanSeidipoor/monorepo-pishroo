import { IsString, IsUUID } from "class-validator";

export class DeleteCityAdminInputs {
  @IsString()
  @IsUUID()
  cityId: string;
}
