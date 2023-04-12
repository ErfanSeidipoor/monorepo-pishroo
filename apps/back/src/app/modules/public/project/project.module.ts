import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProjectResolver } from "./project.resolver";
import { ProjectService } from "./project.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModulePublic {}
