import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsString,
  IsUUID,
} from "class-validator";

export class AddColorsToProductAdminInputs {
  @IsUUID()
  productId: string;

  @IsString({ each: true })
  @IsUUID("4", { each: true })
  @IsArray()
  @ArrayMaxSize(5)
  @ArrayMinSize(0)
  colorIds: string[];
}
