import { IsUUID } from "class-validator";

export class AddImageToTransporterAdminInputs {
  @IsUUID()
  fileId: string;

  @IsUUID()
  transporterId: string;
}
