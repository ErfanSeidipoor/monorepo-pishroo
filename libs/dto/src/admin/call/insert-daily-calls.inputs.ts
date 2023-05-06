import { Expose, Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";

class CallItem {
  @IsNumberString()
  @MinLength(10)
  @MaxLength(20)
  timestamp: string;

  @IsString()
  @MinLength(10)
  @MaxLength(15)
  newPhone: string;
}

export class InsertDailyCallsAdminInputs {
  @ValidateNested({ each: true })
  @Expose()
  @Type(() => CallItem)
  @IsArray()
  @ArrayMaxSize(500)
  @ArrayMinSize(1)
  calls: CallItem[];
}
