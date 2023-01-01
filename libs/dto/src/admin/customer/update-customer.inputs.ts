import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";
import { CreateCustomerAdminInputs } from "./create-customer.inputs";

export class UpdateCustomerAdminInputs extends CreateCustomerAdminInputs {
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

  @IsUUID()
  customerId: string;
}
