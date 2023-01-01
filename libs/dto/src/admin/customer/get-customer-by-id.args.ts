import { IsString } from "class-validator";

export class GetCustomerByIdAdminArgs {
  @IsString()
  customerId: string;
}
