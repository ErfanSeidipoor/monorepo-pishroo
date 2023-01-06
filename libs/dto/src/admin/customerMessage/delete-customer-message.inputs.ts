import { IsString } from "class-validator";

export class DeleteCustomerMessageAdminInputs {
  @IsString()
  customerMessageId: string;
}
