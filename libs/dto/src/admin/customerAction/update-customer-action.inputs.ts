import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class UpdateCustomerActionAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID()
  customerActionId: string;
}
