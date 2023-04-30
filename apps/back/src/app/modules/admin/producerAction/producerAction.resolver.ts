import { ProducerAdminGuard } from "@back/guards";
import { UserId } from "@back/decorators";
import { PaginationArgsGQL } from "@back/dto";
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
  FileUse,
  PaginatedProducerAction,
  ProducerAction,
} from "@pishroo/entities";
import {
  AddFileToProducerActionAdminInputsGQL,
  CreateProducerActionAdminInputsGQL,
  GetProducerActionByIdAdminArgsGQL,
  GetProducerActionsAdminArgsGQL,
  UpdateProducerActionAdminInputsGQL,
} from "./dto";
import { ProducerActionService } from "./producerAction.service";

@Resolver(() => ProducerAction)
export class ProducerActionResolver {
  constructor(private producerActionService: ProducerActionService) {}

  @Mutation(() => ProducerAction)
  @UseGuards(ProducerAdminGuard)
  async createProducerActionAdmin(
    @UserId() userId: string,
    @Args("createProducerActionAdminInputs")
    inputs: CreateProducerActionAdminInputsGQL
  ): Promise<ProducerAction> {
    return await this.producerActionService.createProducerAction(
      userId,
      inputs
    );
  }

  @Mutation(() => ProducerAction)
  @UseGuards(ProducerAdminGuard)
  async updateProducerActionAdmin(
    @UserId() userId: string,
    @Args("updateProducerActionAdminInputs")
    inputs: UpdateProducerActionAdminInputsGQL
  ): Promise<ProducerAction> {
    return await this.producerActionService.updateProducerAction(
      userId,
      inputs
    );
  }

  @Query(() => PaginatedProducerAction, { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async getProducerActionsAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getProducerActionsAdminArgs") args: GetProducerActionsAdminArgsGQL
  ) {
    return this.producerActionService.getProducerActions(paginationArgs, args);
  }

  @Query(() => ProducerAction, { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async getProducerActionByIdAdmin(
    @Args() getProducerActionByIdAdminArgs: GetProducerActionByIdAdminArgsGQL
  ) {
    return this.producerActionService.getProducerActionById(
      getProducerActionByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    File                                    */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => ProducerAction)
  @UseGuards(ProducerAdminGuard)
  async addFileToProducerActionAdmin(
    @Args("addFileToProducerActionAdmin")
    inputs: AddFileToProducerActionAdminInputsGQL
  ): Promise<ProducerAction> {
    return await this.producerActionService.addFileToProducerAction(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async fileUses(@Parent() producerAction: ProducerAction) {
    return this.producerActionService.fileUses(producerAction.id);
  }
}
