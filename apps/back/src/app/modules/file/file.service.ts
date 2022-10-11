import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User, File } from "@pishroo/entities";
import { Repository } from "typeorm";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { createReadStream, ReadStream, statSync } from "fs";
import { basename } from "path";
import {
  CustomError,
  FILE_NOT_FOUND,
  INVALID_USERNAME_OR_PASSWORD,
} from "@pishroo/http-exceptions";

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(User) private userRepo: Repository<User>
  ) {}

  async uploadFile(
    userId: string,
    fileUpload: GraphQLUpload.FileUpload,
    path: string
  ) {
    const { filename, mimetype, encoding } = fileUpload;

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });

    const state = statSync(path);

    const file = this.fileRepo.create({
      encoding,
      mimetype,
      filename: basename(path),
      path,
      destination: "",
      isUsed: false,
      size: state.size,
      user,
    });

    return await file.save();
  }

  async downloadFile(filename: string): Promise<ReadStream> {
    const file = await this.fileRepo.findOne({ where: { filename } });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return createReadStream(file.path);
  }
}
