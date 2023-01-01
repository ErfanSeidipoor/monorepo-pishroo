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
  ProjectReview,
  PaginatedProjectReview,
  Project,
  FileUse,
} from "@pishroo/entities";
import { ProjectReviewService } from "./projectReview.service";
import {
  CreateProjectReviewAdminInputsGQL,
  DeleteProjectReviewAdminInputsGQL,
  GetProjectReviewsAdminArgsGQL,
  GetProjectReviewByIdAdminArgsGQL,
  UpdateProjectReviewAdminInputsGQL,
} from "./dto";

@Resolver(() => ProjectReview)
export class ProjectReviewResolver {
  constructor(private projectReviewService: ProjectReviewService) {}

  @Mutation(() => ProjectReview)
  @UseGuards(ContentAdminGuard)
  async createProjectReviewAdmin(
    @Args("createProjectReviewAdmin")
    inputs: CreateProjectReviewAdminInputsGQL
  ): Promise<ProjectReview> {
    return await this.projectReviewService.createProjectReview(inputs);
  }

  @Mutation(() => ProjectReview)
  @UseGuards(ContentAdminGuard)
  async updateProjectReviewAdmin(
    @Args("updateProjectReviewAdmin")
    inputs: UpdateProjectReviewAdminInputsGQL
  ): Promise<ProjectReview> {
    return await this.projectReviewService.updateProjectReview(inputs);
  }

  @Mutation(() => ProjectReview)
  @UseGuards(ContentAdminGuard)
  async deleteProjectReviewAdmin(
    @Args("deleteProjectReviewAdmin")
    inputs: DeleteProjectReviewAdminInputsGQL
  ): Promise<ProjectReview> {
    return await this.projectReviewService.deleteProjectReview(inputs);
  }

  @Query(() => PaginatedProjectReview, { nullable: true })
  @UseGuards(AdminGuard)
  async getProjectReviewsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetProjectReviewsAdminArgsGQL
  ) {
    return this.projectReviewService.getProjectReviews(paginationArgs, args);
  }

  @Query(() => ProjectReview, { nullable: true })
  @UseGuards(AdminGuard)
  async getProjectReviewByIdAdmin(
    @Args() getProjectReviewByIdAdminArgs: GetProjectReviewByIdAdminArgsGQL
  ) {
    return this.projectReviewService.getProjectReviewById(
      getProjectReviewByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Project, { nullable: false })
  @UseGuards(AdminGuard)
  async project(@Parent() projectReview: ProjectReview) {
    return this.projectReviewService.project(projectReview.id);
  }

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(ContentAdminGuard)
  async fileUses(@Parent() projectReview: ProjectReview) {
    return this.projectReviewService.fileUses(projectReview.id);
  }
}
