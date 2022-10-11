import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { FileController } from "./file.controller";
import { FileResolver } from "./file.resolver";
import { FileService } from "./file.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [FileController],
  providers: [FileService, FileResolver],
})
export class FileModule {}
