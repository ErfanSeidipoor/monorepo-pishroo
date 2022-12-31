import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, ProducerAdminGuard } from "@back/guards";
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
  PaginatedProducerAgent,
  Producer,
  ProducerAgent,
} from "@pishroo/entities";
import {
  CreateProducerAgentAdminInputsGQL,
  DeleteProducerAgentAdminInputsGQL,
  GetProducerAgentByIdAdminArgsGQL,
  GetProducerAgentsAdminArgsGQL,
  UpdateProducerAgentActivationAdminInputsGQL,
  UpdateProducerAgentAdminInputsGQL,
} from "./dto";
import { ProducerAgentService } from "./producerAgent.service";

@Resolver(() => ProducerAgent)
export class ProducerAgentResolver {
  constructor(private producerAgentService: ProducerAgentService) {}

  @Mutation(() => ProducerAgent)
  @UseGuards(ProducerAdminGuard)
  async createProducerAgentAdmin(
    @Args("createProducerAgentAdmin")
    inputs: CreateProducerAgentAdminInputsGQL
  ): Promise<ProducerAgent> {
    return await this.producerAgentService.createProducerAgent(inputs);
  }

  @Mutation(() => ProducerAgent)
  @UseGuards(ProducerAdminGuard)
  async updateProducerAgentAdmin(
    @Args("updateProducerAgentAdmin")
    inputs: UpdateProducerAgentAdminInputsGQL
  ): Promise<ProducerAgent> {
    return await this.producerAgentService.updateProducerAgent(inputs);
  }

  @Mutation(() => ProducerAgent)
  @UseGuards(ProducerAdminGuard)
  async updateProducerAgentActivationAdmin(
    @Args("updateProducerAgentActivationAdmin")
    inputs: UpdateProducerAgentActivationAdminInputsGQL
  ): Promise<ProducerAgent> {
    return await this.producerAgentService.updateProducerAgentActivation(
      inputs
    );
  }

  @Mutation(() => ProducerAgent)
  @UseGuards(ProducerAdminGuard)
  async deleteProducerAgentAdmin(
    @Args("deleteProducerAgentAdmin")
    inputs: DeleteProducerAgentAdminInputsGQL
  ): Promise<ProducerAgent> {
    return await this.producerAgentService.deleteProducerAgent(inputs);
  }

  @Query(() => PaginatedProducerAgent, { nullable: true })
  @UseGuards(AdminGuard)
  async getProducerAgentsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetProducerAgentsAdminArgsGQL
  ) {
    return this.producerAgentService.getProducerAgents(paginationArgs, args);
  }

  @Query(() => ProducerAgent, { nullable: true })
  @UseGuards(AdminGuard)
  async getProducerAgentByIdAdmin(
    @Args()
    getProducerAgentByIdAdminArgs: GetProducerAgentByIdAdminArgsGQL
  ) {
    return this.producerAgentService.getProducerAgentById(
      getProducerAgentByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Producer, { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async producer(@Parent() producerAgent: ProducerAgent) {
    return this.producerAgentService.producer(producerAgent.id);
  }
}
