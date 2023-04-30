import { IsUUID } from "class-validator";

export class AddFileToTransporterActionAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  transporterActionId: string;
}
