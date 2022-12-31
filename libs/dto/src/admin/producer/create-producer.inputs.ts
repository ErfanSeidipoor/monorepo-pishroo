import {
  IsBoolean,
  IsString,
  MaxLength,
  MinLength,
  IsPhoneNumber,
  IsOptional,
  IsEmail,
  IsUUID,
} from "class-validator";

export class CreateProducerAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(256)
  address: string;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsUUID()
  cityId?: string;
}
