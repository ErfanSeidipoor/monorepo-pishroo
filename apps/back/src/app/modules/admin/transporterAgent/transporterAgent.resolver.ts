import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, TransporterAdminGuard } from "@back/guards";
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
  PaginatedTransporterAgent,
  Transporter,
  TransporterAgent,
} from "@pishroo/entities";
import {
  CreateTransporterAgentAdminInputsGQL,
  DeleteTransporterAgentAdminInputsGQL,
  GetTransporterAgentByIdAdminArgsGQL,
  GetTransporterAgentsAdminArgsGQL,
  UpdateTransporterAgentActivationAdminInputsGQL,
  UpdateTransporterAgentAdminInputsGQL,
} from "./dto";
import { TransporterAgentService } from "./transporterAgent.service";

@Resolver(() => TransporterAgent)
export class TransporterAgentResolver {
  constructor(private transporterAgentService: TransporterAgentService) {}

  @Mutation(() => TransporterAgent)
  @UseGuards(TransporterAdminGuard)
  async createTransporterAgentAdmin(
    @Args("createTransporterAgentAdmin")
    inputs: CreateTransporterAgentAdminInputsGQL
  ): Promise<TransporterAgent> {
    return await this.transporterAgentService.createTransporterAgent(inputs);
  }

  @Mutation(() => TransporterAgent)
  @UseGuards(TransporterAdminGuard)
  async updateTransporterAgentAdmin(
    @Args("updateTransporterAgentAdmin")
    inputs: UpdateTransporterAgentAdminInputsGQL
  ): Promise<TransporterAgent> {
    return await this.transporterAgentService.updateTransporterAgent(inputs);
  }

  @Mutation(() => TransporterAgent)
  @UseGuards(TransporterAdminGuard)
  async updateTransporterAgentActivationAdmin(
    @Args("updateTransporterAgentActivationAdmin")
    inputs: UpdateTransporterAgentActivationAdminInputsGQL
  ): Promise<TransporterAgent> {
    return await this.transporterAgentService.updateTransporterAgentActivation(
      inputs
    );
  }

  @Mutation(() => TransporterAgent)
  @UseGuards(TransporterAdminGuard)
  async deleteTransporterAgentAdmin(
    @Args("deleteTransporterAgentAdmin")
    inputs: DeleteTransporterAgentAdminInputsGQL
  ): Promise<TransporterAgent> {
    return await this.transporterAgentService.deleteTransporterAgent(inputs);
  }

  @Query(() => PaginatedTransporterAgent, { nullable: true })
  @UseGuards(AdminGuard)
  async getTransporterAgentsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetTransporterAgentsAdminArgsGQL
  ) {
    return this.transporterAgentService.getTransporterAgents(
      paginationArgs,
      args
    );
  }

  @Query(() => TransporterAgent, { nullable: true })
  @UseGuards(AdminGuard)
  async getTransporterAgentByIdAdmin(
    @Args()
    getTransporterAgentByIdAdminArgs: GetTransporterAgentByIdAdminArgsGQL
  ) {
    return this.transporterAgentService.getTransporterAgentById(
      getTransporterAgentByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Transporter, { nullable: false })
  @UseGuards(TransporterAdminGuard)
  async transporter(@Parent() transporterAgent: TransporterAgent) {
    return this.transporterAgentService.transporter(transporterAgent.id);
  }
}
