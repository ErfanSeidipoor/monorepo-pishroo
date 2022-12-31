import { IsString } from "class-validator";

export class DeletePropertyAdminInputs {
  @IsString()
  propertyId: string;
}
