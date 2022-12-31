import { IsString } from "class-validator";

export class GetTransporterByIdAdminArgs {
  @IsString()
  transporterId: string;
}
