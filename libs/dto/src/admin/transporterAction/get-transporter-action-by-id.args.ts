import { IsUUID } from "class-validator";

export class GetTransporterActionByIdAdminArgs {
  @IsUUID()
  transporterActionId: string;
}
