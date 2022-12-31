import { IsUUID } from "class-validator";

export class RemovePropertyFromProductAdminInputs {
  @IsUUID()
  productPropertyId: string;
}
