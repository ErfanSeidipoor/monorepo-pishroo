import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class UpdatePropertyOfProductAdminInputs {
  @IsUUID()
  productPropertyId: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  value: string;
}
