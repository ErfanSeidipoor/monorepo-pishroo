import { PaginationArgsGQL } from "@back/dto";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import {
  City,
  FileUse,
  PaginatedProject,
  Project,
  ProjectReview,
} from "@pishroo/entities";
import { GetProjectByIdPublicArgsGQL, GetProjectsPublicArgsGQL } from "./dto";
import { ProjectService } from "./project.service";

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => PaginatedProject, { nullable: false })
  async getProjectsPublic(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getProjectsPublicArgs") args: GetProjectsPublicArgsGQL
  ) {
    return this.projectService.getProjects(paginationArgs, args);
  }

  @Query(() => Project, { nullable: true })
  async getProjectByIdPublic(
    @Args() getProjectByIdPublicArgs: GetProjectByIdPublicArgsGQL
  ) {
    return this.projectService.getProjectById(getProjectByIdPublicArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  async fileUses(@Parent() project: Project) {
    return this.projectService.fileUses(project.id);
  }

  @ResolveField(() => [City], { nullable: false })
  async city(@Parent() project: Project) {
    return this.projectService.city(project.id);
  }

  @ResolveField(() => [ProjectReview], { nullable: false })
  async projectReviews(@Parent() project: Project) {
    return this.projectService.projectReviews(project.id);
  }
}
