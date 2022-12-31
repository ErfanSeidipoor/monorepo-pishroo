import { IsString } from "class-validator";

export class DeleteTransporterAgentAdminInputs {
  @IsString()
  transporterAgentId: string;
}
