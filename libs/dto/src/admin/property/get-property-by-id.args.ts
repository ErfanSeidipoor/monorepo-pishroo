import { IsString } from "class-validator";

export class GetPropertyByIdAdminArgs {
  @IsString()
  propertyId: string;
}
