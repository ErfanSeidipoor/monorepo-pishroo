import { IsBoolean, IsUUID } from "class-validator";

export class UpdateUserActivationAdminInputs {
  @IsUUID()
  userId: string;

  @IsBoolean()
  isActive: boolean;
}
