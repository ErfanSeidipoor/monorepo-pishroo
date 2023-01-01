import { IsString } from "class-validator";

export class DeleteCustomerAdminInputs {
  @IsString()
  customerId: string;
}
