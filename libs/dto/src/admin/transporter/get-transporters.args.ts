import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class GetTransportersAdminArgs {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsUUID("4", { each: true })
  @IsArray()
  @ArrayMaxSize(10)
  cityIds?: string[];

  @IsOptional()
  @IsUUID("4", { each: true })
  @IsArray()
  @ArrayMaxSize(10)
  provinceIds?: string[];
}
