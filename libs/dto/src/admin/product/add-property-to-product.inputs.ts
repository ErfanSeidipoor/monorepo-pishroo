import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class AddPropertyToProductAdminInputs {
  @IsUUID()
  propertyId: string;

  @IsUUID()
  productId: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  value: string;
}
