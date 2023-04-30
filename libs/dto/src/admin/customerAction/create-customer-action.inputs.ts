import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateCustomerActionAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID()
  customerId: string;
}
