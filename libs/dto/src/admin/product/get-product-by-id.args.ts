import { Field } from "@nestjs/graphql";
import { IsString } from "class-validator";

export class GetProductByIdAdminArgs {
  @Field()
  @IsString()
  productId: string;
}
