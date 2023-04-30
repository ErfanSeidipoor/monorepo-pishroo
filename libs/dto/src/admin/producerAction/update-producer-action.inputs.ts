import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class UpdateProducerActionAdminInputs {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  text: string;

  @IsUUID()
  producerActionId: string;
}
