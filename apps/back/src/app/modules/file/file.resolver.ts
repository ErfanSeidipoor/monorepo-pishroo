import { UserId } from "@back/decorators";
import { AdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { File } from "@pishroo/entities";
import { createWriteStream } from "fs";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import path = require("path");
import { v4 as uuid } from "uuid";
import { RemoveImageAdminInputsGQL } from "./dto";
import { FileService } from "./file.service";

@Resolver()
export class FileResolver {
  constructor(private fileService: FileService) {}

  @Mutation(() => File)
  @UseGuards(AdminGuard)
  async removeImageAdmin(
    @Args("removeImageAdmin")
    inputs: RemoveImageAdminInputsGQL
  ): Promise<File> {
    return await this.fileService.removeImage(inputs);
  }

  @Mutation(() => File)
  @UseGuards(AdminGuard)
  async uploadFile(
    @Args({ name: "file", type: () => GraphQLUpload })
    fileUpload: GraphQLUpload.FileUpload,
    @UserId() userId: string
  ): Promise<File> {
    const pathWithFilename = `uploads/${uuid()}${path.extname(
      fileUpload.filename
    )}`;

    return new Promise((resolve, reject) =>
      fileUpload
        .createReadStream()
        .pipe(createWriteStream(pathWithFilename))
        .on("finish", () => {
          resolve(
            this.fileService.uploadFile(userId, fileUpload, pathWithFilename)
          );
        })
        .on("error", () => {
          reject(false);
        })
    );
  }

  // @Query(() => String)
  // @UseGuards(AdminGuard)
  // async downloadFile(@Res() response: Response): Promise<string> {
  //   console.log({ response });

  //   const readStream = await this.fileService.downloadFile();

  //   readStream.pipe(response);
  //   return "Hi, there";
  // }
}
