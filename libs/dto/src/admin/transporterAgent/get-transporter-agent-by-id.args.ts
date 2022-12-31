import { IsString } from "class-validator";

export class GetTransporterAgentByIdAdminArgs {
  @IsString()
  transporterAgentId: string;
}
