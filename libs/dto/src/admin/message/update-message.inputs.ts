import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateMessageAdminInputs {
  @IsUUID()
  messageId: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID("4", { each: true })
  @IsArray()
  @ArrayMaxSize(100)
  customerIds: string[];

  @IsUUID()
  userId: string;

  @IsBoolean()
  isActive: boolean;
}
