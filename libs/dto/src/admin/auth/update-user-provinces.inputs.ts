import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateUserProvincesAdminInputs {
  @IsUUID()
  userId: string;

  @IsString({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(50, { each: true })
  @IsArray()
  @ArrayMaxSize(15)
  @ArrayMinSize(0)
  provinceIds: string[];
}
