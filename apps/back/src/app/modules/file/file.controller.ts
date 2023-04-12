import { UserId } from "@back/decorators";
import { AdminGuard } from "@back/guards";
import { Controller, Get, Param, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { FileService } from "./file.service";

@Controller("/file")
export class FileController {
  constructor(private fileService: FileService) {}

  @Get("/:filename")
  async getUserPhoto(
    @Param("filename") filename: string,
    @Res() response: Response,
    @UserId() userId: string
  ) {
    const file = await this.fileService.downloadFile(filename);
    file.pipe(response);
  }
}
