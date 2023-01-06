import { PaginationArgsGQL } from "@back/dto";
import { TransporterAdminGuard } from "@back/guards";
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
  PaginatedTransporter,
  Transporter,
} from "@pishroo/entities";
import {
  AddImageToTransporterAdminInputsGQL,
  CreateTransporterAdminInputsGQL,
  DeleteTransporterAdminInputsGQL,
  GetTransporterByIdAdminArgsGQL,
  GetTransportersAdminArgsGQL,
  RemoveImageFromTransporterAdminInputsGQL,
  UpdateTransporterActivationAdminInputsGQL,
  UpdateTransporterAdminInputsGQL,
} from "./dto";
import { TransporterService } from "./transporter.service";

@Resolver(() => Transporter)
export class TransporterResolver {
  constructor(private transporterService: TransporterService) {}

  @Mutation(() => Transporter)
  @UseGuards(TransporterAdminGuard)
  async createTransporterAdmin(
    @Args("createTransporterAdmin")
    inputs: CreateTransporterAdminInputsGQL
  ): Promise<Transporter> {
    return await this.transporterService.createTransporter(inputs);
  }

  @Mutation(() => Transporter)
  @UseGuards(TransporterAdminGuard)
  async updateTransporterAdmin(
    @Args("updateTransporterAdmin")
    inputs: UpdateTransporterAdminInputsGQL
  ): Promise<Transporter> {
    return await this.transporterService.updateTransporter(inputs);
  }

  @Mutation(() => Transporter)
  @UseGuards(TransporterAdminGuard)
  async updateTransporterActivationAdmin(
    @Args("updateTransporterActivationAdmin")
    inputs: UpdateTransporterActivationAdminInputsGQL
  ): Promise<Transporter> {
    return await this.transporterService.updateTransporterActivation(inputs);
  }

  @Mutation(() => Transporter)
  @UseGuards(TransporterAdminGuard)
  async deleteTransporterAdmin(
    @Args("deleteTransporterAdmin")
    inputs: DeleteTransporterAdminInputsGQL
  ): Promise<Transporter> {
    return await this.transporterService.deleteTransporter(inputs);
  }

  @Query(() => PaginatedTransporter, { nullable: true })
  @UseGuards(TransporterAdminGuard)
  async getTransportersAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetTransportersAdminArgsGQL
  ) {
    return this.transporterService.getTransporters(paginationArgs, args);
  }

  @Query(() => Transporter, { nullable: true })
  @UseGuards(TransporterAdminGuard)
  async getTransporterByIdAdmin(
    @Args() getTransporterByIdAdminArgs: GetTransporterByIdAdminArgsGQL
  ) {
    return this.transporterService.getTransporterById(
      getTransporterByIdAdminArgs
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => Transporter)
  @UseGuards(TransporterAdminGuard)
  async addImageToTransporterAdmin(
    @Args("addImageToTransporterAdmin")
    inputs: AddImageToTransporterAdminInputsGQL
  ): Promise<Transporter> {
    return await this.transporterService.addImageToTransporter(inputs);
  }

  @Mutation(() => Transporter)
  @UseGuards(TransporterAdminGuard)
  async removeImageFromTransporterAdmin(
    @Args("removeImageFromTransporterAdmin")
    inputs: RemoveImageFromTransporterAdminInputsGQL
  ): Promise<Transporter> {
    return await this.transporterService.removeImageFromTransporter(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(TransporterAdminGuard)
  async fileUses(@Parent() transporter: Transporter) {
    return this.transporterService.fileUses(transporter.id);
  }

  @ResolveField(() => [City], { nullable: false })
  @UseGuards(TransporterAdminGuard)
  async city(@Parent() transporter: Transporter) {
    return this.transporterService.city(transporter.id);
  }
}
