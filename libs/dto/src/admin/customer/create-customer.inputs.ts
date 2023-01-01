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

export class CreateCustomerAdminInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  lastName: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  jobTitle: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsPhoneNumber()
  officePhone?: string;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsUUID()
  cityId?: string;
}
