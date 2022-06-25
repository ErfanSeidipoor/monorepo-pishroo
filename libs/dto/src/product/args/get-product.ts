import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class GetProductArgs {
  @Field()
  @IsString()
  productId: string;
}
