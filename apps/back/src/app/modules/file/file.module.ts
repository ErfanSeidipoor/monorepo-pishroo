import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { FileResolver } from "./file.resolver";
import { FileService } from "./file.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [FileService, FileResolver],
})
export class FileModule {}
