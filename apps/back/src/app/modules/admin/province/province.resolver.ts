import { PaginationArgsGQL } from "@back/dto";
import { ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { City, PaginatedProvince, Province } from "@pishroo/entities";
import { ProvinceService } from "./province.service";

import {
  CreateProvinceAdminInputsGQL,
  DeleteProvinceAdminInputsGQL,
  GetProvinceByIdAdminArgsGQL,
  GetProvincesAdminArgsGQL,
  UpdateProvinceAdminInputsGQL,
} from "./dto";

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private provinceService: ProvinceService) {}

  @Mutation(() => Province)
  @UseGuards(ProductAdminGuard)
  async createProvinceAdmin(
    @Args("createProvinceAdmin")
    inputs: CreateProvinceAdminInputsGQL
  ): Promise<Province> {
    return await this.provinceService.createProvince(inputs);
  }

  @Mutation(() => Province)
  @UseGuards(ProductAdminGuard)
  async updateProvinceAdmin(
    @Args("updateProvinceAdmin")
    inputs: UpdateProvinceAdminInputsGQL
  ): Promise<Province> {
    return await this.provinceService.updateProvince(inputs);
  }

  @Mutation(() => Province)
  @UseGuards(ProductAdminGuard)
  async deleteProvinceAdmin(
    @Args("deleteProvinceAdmin")
    inputs: DeleteProvinceAdminInputsGQL
  ): Promise<Province> {
    return await this.provinceService.deleteProvince(inputs);
  }

  @Query(() => PaginatedProvince, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getProvincesAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetProvincesAdminArgsGQL
  ) {
    return this.provinceService.getProvinces(paginationArgs, args);
  }

  @Query(() => Province, { nullable: true })
  @UseGuards(ProductAdminGuard)
  async getProvinceByIdAdmin(
    @Args() getProvinceByIdAdminArgs: GetProvinceByIdAdminArgsGQL
  ) {
    return this.provinceService.getProvinceById(getProvinceByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [City], { nullable: false })
  @UseGuards(ProductAdminGuard)
  async cities(@Parent() province: Province) {
    return this.provinceService.cities(province.id);
  }
}
