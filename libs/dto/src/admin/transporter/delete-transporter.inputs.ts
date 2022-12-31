import { IsString } from "class-validator";

export class DeleteTransporterAdminInputs {
  @IsString()
  transporterId: string;
}
