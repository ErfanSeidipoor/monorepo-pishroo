import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "@pishroo/entities";
import { ProjectReviewResolver } from "./projectReview.resolver";
import { ProjectReviewService } from "./projectReview.service";

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [ProjectReviewService, ProjectReviewResolver],
})
export class ProjectReviewModuleAdmin {}
