import { IsBoolean, IsUUID } from "class-validator";

export class UpdateProjectActivationAdminInputs {
  @IsUUID()
  projectId: string;

  @IsBoolean()
  isActive: boolean;
}
