import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, ContentAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import {
  City,
  FileUse,
  PaginatedProject,
  Project,
  ProjectReview,
} from "@pishroo/entities";
import {
  AddImageToProjectAdminInputsGQL,
  CreateProjectAdminInputsGQL,
  DeleteProjectAdminInputsGQL,
  GetProjectByIdAdminArgsGQL,
  GetProjectsAdminArgsGQL,
  RemoveImageFromProjectAdminInputsGQL,
  UpdateProjectActivationAdminInputsGQL,
  UpdateProjectAdminInputsGQL,
} from "./dto";
import { ProjectService } from "./project.service";

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Mutation(() => Project)
  @UseGuards(ContentAdminGuard)
  async createProjectAdmin(
    @Args("createProjectAdmin")
    inputs: CreateProjectAdminInputsGQL
  ): Promise<Project> {
    return await this.projectService.createProject(inputs);
  }

  @Mutation(() => Project)
  @UseGuards(ContentAdminGuard)
  async updateProjectAdmin(
    @Args("updateProjectAdmin")
    inputs: UpdateProjectAdminInputsGQL
  ): Promise<Project> {
    return await this.projectService.updateProject(inputs);
  }

  @Mutation(() => Project)
  @UseGuards(ContentAdminGuard)
  async updateProjectActivationAdmin(
    @Args("updateProjectActivationAdmin")
    inputs: UpdateProjectActivationAdminInputsGQL
  ): Promise<Project> {
    return await this.projectService.updateProjectActivation(inputs);
  }

  @Mutation(() => Project)
  @UseGuards(ContentAdminGuard)
  async deleteProjectAdmin(
    @Args("deleteProjectAdmin")
    inputs: DeleteProjectAdminInputsGQL
  ): Promise<Project> {
    return await this.projectService.deleteProject(inputs);
  }

  @Query(() => PaginatedProject, { nullable: true })
  @UseGuards(ContentAdminGuard)
  async getProjectsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetProjectsAdminArgsGQL
  ) {
    return this.projectService.getProjects(paginationArgs, args);
  }

  @Query(() => Project, { nullable: true })
  @UseGuards(ContentAdminGuard)
  async getProjectByIdAdmin(
    @Args() getProjectByIdAdminArgs: GetProjectByIdAdminArgsGQL
  ) {
    return this.projectService.getProjectById(getProjectByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => Project)
  @UseGuards(ContentAdminGuard)
  async addImageToProjectAdmin(
    @Args("addImageToProjectAdmin")
    inputs: AddImageToProjectAdminInputsGQL
  ): Promise<Project> {
    return await this.projectService.addImageToProject(inputs);
  }

  @Mutation(() => Project)
  @UseGuards(ContentAdminGuard)
  async removeImageFromProjectAdmin(
    @Args("removeImageFromProjectAdmin")
    inputs: RemoveImageFromProjectAdminInputsGQL
  ): Promise<Project> {
    return await this.projectService.removeImageFromProject(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(ContentAdminGuard)
  async fileUses(@Parent() project: Project) {
    return this.projectService.fileUses(project.id);
  }

  @ResolveField(() => [City], { nullable: false })
  @UseGuards(ContentAdminGuard)
  async city(@Parent() project: Project) {
    return this.projectService.city(project.id);
  }

  @ResolveField(() => [ProjectReview], { nullable: false })
  @UseGuards(AdminGuard)
  async projectReviews(@Parent() project: Project) {
    return this.projectService.projectReviews(project.id);
  }
}
