import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { FileService } from "./file.service";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { createWriteStream } from "fs";
import { File } from "@pishroo/entities";
import { UploadFileInputsGQL } from "./dto/uploadFile.inputs";

@Resolver()
export class FileResolver {
  constructor(private fileService: FileService) {}

  // @Query(() => User)
  // async loginAdmin(
  //   @Args("loginAdminInputs") loginAdminInputs: LoginAdminInputsGQL,
  //   @Context() context: Ctx
  // ): Promise<User> {
  //   return await this.authService.login(context, loginAdminInputs);
  // }

  @Mutation(() => File)
  async uploadFile(
    @Args("uploadFileInputs") uploadFileInputs: UploadFileInputsGQL
  ) {
    console.log({ uploadFileInputs });
    return new File();

    // return new Promise((resolve, reject) =>
    //   createWriteStream()
    //     .pipe(createWriteStream(`./uploads/${filename}`))
    //     .on("finish", () => resolve(true))
    //     .on("error", () => reject(false))
    // );
  }
}
