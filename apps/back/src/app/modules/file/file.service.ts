import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetFileByIdAdminArgs, RemoveImageAdminInputs } from "@pishroo/dto";
import { File, FileUse, User } from "@pishroo/entities";
import {
  CustomError,
  FILE_NOT_FOUND,
  FILE_USE_NOT_FOUND,
} from "@pishroo/http-exceptions";
import { createReadStream, ReadStream, statSync } from "fs";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { basename } from "path";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class FileService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
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

  async removeImage(args: RemoveImageAdminInputs) {
    const { fileId } = args;

    /* ---------------------------------- file ---------------------------------- */

    const fileUse = await this.fileUseRepo.findOne({
      where: {
        fileId,
      },
      relations: ["file", "product"],
    });

    if (!fileUse) {
      throw new CustomError(FILE_USE_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(fileUse.file);
      await manager.softRemove(fileUse);
    });

    return fileUse.file;
  }

  async downloadFile(filename: string): Promise<ReadStream> {
    const file = await this.fileRepo.findOne({ where: { filename } });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return createReadStream(file.path);
  }

  async getFileById(args: GetFileByIdAdminArgs): Promise<File> {
    const { fileId } = args;

    const file = await this.fileRepo
      .createQueryBuilder("file")
      .andWhere("file.id = :fileId", {
        fileId,
      })
      .getOne();

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return file;
  }
}
