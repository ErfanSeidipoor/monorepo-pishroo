import { PaginationArgsGQL } from "@back/dto";
import { ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Color, PaginatedColor } from "@pishroo/entities";
import { ColorService } from "./color.service";
import {
  CreateColorAdminInputsGQL,
  DeleteColorAdminInputsGQL,
  GetColorByIdAdminArgsGQL,
  GetColorsAdminArgsGQL,
  UpdateColorAdminInputsGQL,
} from "./dto";

@Resolver(() => Color)
export class ColorResolver {
  constructor(private colorService: ColorService) {}

  @Mutation(() => Color)
  @UseGuards(ProductAdminGuard)
  async createColorAdmin(
    @Args("createColorAdmin")
    inputs: CreateColorAdminInputsGQL
  ): Promise<Color> {
    return await this.colorService.createColor(inputs);
  }

  @Mutation(() => Color)
  @UseGuards(ProductAdminGuard)
  async updateColorAdmin(
    @Args("updateColorAdmin")
    inputs: UpdateColorAdminInputsGQL
  ): Promise<Color> {
    return await this.colorService.updateColor(inputs);
  }

  @Mutation(() => Color)
  @UseGuards(ProductAdminGuard)
  async deleteColorAdmin(
    @Args("deleteColorAdmin")
    inputs: DeleteColorAdminInputsGQL
  ): Promise<Color> {
    return await this.colorService.deleteColor(inputs);
  }

  @Query(() => PaginatedColor, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getColorsAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetColorsAdminArgsGQL
  ) {
    return this.colorService.getColors(paginationArgs, args);
  }

  @Query(() => Color, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getColorByIdAdmin(
    @Args() getColorByIdAdminArgs: GetColorByIdAdminArgsGQL
  ) {
    return this.colorService.getColorById(getColorByIdAdminArgs);
  }
}
