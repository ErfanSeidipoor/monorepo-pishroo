import { IsUUID } from "class-validator";

export class GetCustomerActionByIdAdminArgs {
  @IsUUID()
  customerActionId: string;
}
