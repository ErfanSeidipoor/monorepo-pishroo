import { IsUUID } from "class-validator";

export class CreateCustomerMessageAdminInputs {
  @IsUUID()
  messageId: string;

  @IsUUID()
  customerId: string;
}
