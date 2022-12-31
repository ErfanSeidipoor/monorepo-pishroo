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

export class CreateTransporterAgentAdminInputs {
  @IsUUID()
  transporterId: string;

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

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsBoolean()
  isActive: boolean;
}
