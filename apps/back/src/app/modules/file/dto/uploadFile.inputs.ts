import { Field, InputType } from "@nestjs/graphql";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";

@InputType()
export class UploadFileInputsGQL {
  @Field(() => String)
  name: string;

  @Field(() => String)
  breed: string;

  @Field(() => GraphQLUpload)
  image: Promise<GraphQLUpload.FileUpload>;
}
