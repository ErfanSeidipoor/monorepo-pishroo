import { TransporterAdminGuard } from "@back/guards";
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
  PaginatedTransporterAction,
  TransporterAction,
} from "@pishroo/entities";
import {
  AddFileToTransporterActionAdminInputsGQL,
  CreateTransporterActionAdminInputsGQL,
  GetTransporterActionByIdAdminArgsGQL,
  GetTransporterActionsAdminArgsGQL,
  UpdateTransporterActionAdminInputsGQL,
} from "./dto";
import { TransporterActionService } from "./transporterAction.service";

@Resolver(() => TransporterAction)
export class TransporterActionResolver {
  constructor(private transporterActionService: TransporterActionService) {}

  @Mutation(() => TransporterAction)
  @UseGuards(TransporterAdminGuard)
  async createTransporterActionAdmin(
    @UserId() userId: string,
    @Args("createTransporterActionAdminInputs")
    inputs: CreateTransporterActionAdminInputsGQL
  ): Promise<TransporterAction> {
    return await this.transporterActionService.createTransporterAction(
      userId,
      inputs
    );
  }

  @Mutation(() => TransporterAction)
  @UseGuards(TransporterAdminGuard)
  async updateTransporterActionAdmin(
    @UserId() userId: string,
    @Args("updateTransporterActionAdminInputs")
    inputs: UpdateTransporterActionAdminInputsGQL
  ): Promise<TransporterAction> {
    return await this.transporterActionService.updateTransporterAction(
      userId,
      inputs
    );
  }

  @Query(() => PaginatedTransporterAction, { nullable: false })
  @UseGuards(TransporterAdminGuard)
  async getTransporterActionsAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getTransporterActionsAdminArgs") args: GetTransporterActionsAdminArgsGQL
  ) {
    return this.transporterActionService.getTransporterActions(paginationArgs, args);
  }

  @Query(() => TransporterAction, { nullable: false })
  @UseGuards(TransporterAdminGuard)
  async getTransporterActionByIdAdmin(
    @Args() getTransporterActionByIdAdminArgs: GetTransporterActionByIdAdminArgsGQL
  ) {
    return this.transporterActionService.getTransporterActionById(
      getTransporterActionByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    File                                    */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => TransporterAction)
  @UseGuards(TransporterAdminGuard)
  async addFileToTransporterActionAdmin(
    @Args("addFileToTransporterActionAdmin")
    inputs: AddFileToTransporterActionAdminInputsGQL
  ): Promise<TransporterAction> {
    return await this.transporterActionService.addFileToTransporterAction(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(TransporterAdminGuard)
  async fileUses(@Parent() transporterAction: TransporterAction) {
    return this.transporterActionService.fileUses(transporterAction.id);
  }
}
