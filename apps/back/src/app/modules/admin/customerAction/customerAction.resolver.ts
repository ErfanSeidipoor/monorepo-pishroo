import { CustomerAdminGuard } from "@back/guards";
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
  PaginatedCustomerAction,
  CustomerAction,
} from "@pishroo/entities";
import {
  AddFileToCustomerActionAdminInputsGQL,
  CreateCustomerActionAdminInputsGQL,
  GetCustomerActionByIdAdminArgsGQL,
  GetCustomerActionsAdminArgsGQL,
  UpdateCustomerActionAdminInputsGQL,
} from "./dto";
import { CustomerActionService } from "./customerAction.service";

@Resolver(() => CustomerAction)
export class CustomerActionResolver {
  constructor(private customerActionService: CustomerActionService) {}

  @Mutation(() => CustomerAction)
  @UseGuards(CustomerAdminGuard)
  async createCustomerActionAdmin(
    @UserId() userId: string,
    @Args("createCustomerActionAdminInputs")
    inputs: CreateCustomerActionAdminInputsGQL
  ): Promise<CustomerAction> {
    return await this.customerActionService.createCustomerAction(
      userId,
      inputs
    );
  }

  @Mutation(() => CustomerAction)
  @UseGuards(CustomerAdminGuard)
  async updateCustomerActionAdmin(
    @UserId() userId: string,
    @Args("updateCustomerActionAdminInputs")
    inputs: UpdateCustomerActionAdminInputsGQL
  ): Promise<CustomerAction> {
    return await this.customerActionService.updateCustomerAction(
      userId,
      inputs
    );
  }

  @Query(() => PaginatedCustomerAction, { nullable: false })
  @UseGuards(CustomerAdminGuard)
  async getCustomerActionsAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getCustomerActionsAdminArgs") args: GetCustomerActionsAdminArgsGQL
  ) {
    return this.customerActionService.getCustomerActions(paginationArgs, args);
  }

  @Query(() => CustomerAction, { nullable: false })
  @UseGuards(CustomerAdminGuard)
  async getCustomerActionByIdAdmin(
    @Args() getCustomerActionByIdAdminArgs: GetCustomerActionByIdAdminArgsGQL
  ) {
    return this.customerActionService.getCustomerActionById(
      getCustomerActionByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    File                                    */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => CustomerAction)
  @UseGuards(CustomerAdminGuard)
  async addFileToCustomerActionAdmin(
    @Args("addFileToCustomerActionAdmin")
    inputs: AddFileToCustomerActionAdminInputsGQL
  ): Promise<CustomerAction> {
    return await this.customerActionService.addFileToCustomerAction(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(CustomerAdminGuard)
  async fileUses(@Parent() customerAction: CustomerAction) {
    return this.customerActionService.fileUses(customerAction.id);
  }
}
