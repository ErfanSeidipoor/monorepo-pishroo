import { PaginationArgsGQL } from "@back/dto";
import { ProducerAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { City, FileUse, PaginatedProducer, Producer } from "@pishroo/entities";
import {
  AddImageToProducerAdminInputsGQL,
  CreateProducerAdminInputsGQL,
  DeleteProducerAdminInputsGQL,
  GetProducerByIdAdminArgsGQL,
  GetProducersAdminArgsGQL,
  RemoveImageFromProducerAdminInputsGQL,
  UpdateProducerActivationAdminInputsGQL,
  UpdateProducerAdminInputsGQL,
} from "./dto";
import { ProducerService } from "./producer.service";

@Resolver(() => Producer)
export class ProducerResolver {
  constructor(private producerService: ProducerService) {}

  @Mutation(() => Producer)
  @UseGuards(ProducerAdminGuard)
  async createProducerAdmin(
    @Args("createProducerAdminInputs")
    inputs: CreateProducerAdminInputsGQL
  ): Promise<Producer> {
    return await this.producerService.createProducer(inputs);
  }

  @Mutation(() => Producer)
  @UseGuards(ProducerAdminGuard)
  async updateProducerAdmin(
    @Args("updateProducerAdminInputs")
    inputs: UpdateProducerAdminInputsGQL
  ): Promise<Producer> {
    return await this.producerService.updateProducer(inputs);
  }

  @Mutation(() => Producer)
  @UseGuards(ProducerAdminGuard)
  async updateProducerActivationAdmin(
    @Args("updateProducerActivationAdminInputs")
    inputs: UpdateProducerActivationAdminInputsGQL
  ): Promise<Producer> {
    return await this.producerService.updateProducerActivation(inputs);
  }

  @Mutation(() => Producer)
  @UseGuards(ProducerAdminGuard)
  async deleteProducerAdmin(
    @Args("deleteProducerAdmin")
    inputs: DeleteProducerAdminInputsGQL
  ): Promise<Producer> {
    return await this.producerService.deleteProducer(inputs);
  }

  @Query(() => PaginatedProducer, { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async getProducersAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getProducersAdminArgs") args: GetProducersAdminArgsGQL
  ) {
    return this.producerService.getProducers(paginationArgs, args);
  }

  @Query(() => Producer, { nullable: true })
  @UseGuards(ProducerAdminGuard)
  async getProducerByIdAdmin(
    @Args() getProducerByIdAdminArgs: GetProducerByIdAdminArgsGQL
  ) {
    return this.producerService.getProducerById(getProducerByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => Producer)
  @UseGuards(ProducerAdminGuard)
  async addImageToProducerAdmin(
    @Args("addImageToProducerAdmin")
    inputs: AddImageToProducerAdminInputsGQL
  ): Promise<Producer> {
    return await this.producerService.addImageToProducer(inputs);
  }

  @Mutation(() => Producer)
  @UseGuards(ProducerAdminGuard)
  async removeImageFromProducerAdmin(
    @Args("removeImageFromProducerAdmin")
    inputs: RemoveImageFromProducerAdminInputsGQL
  ): Promise<Producer> {
    return await this.producerService.removeImageFromProducer(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async fileUses(@Parent() producer: Producer) {
    return this.producerService.fileUses(producer.id);
  }

  @ResolveField(() => City, { nullable: false })
  @UseGuards(ProducerAdminGuard)
  async city(@Parent() producer: Producer) {
    return this.producerService.city(producer.id);
  }
}
