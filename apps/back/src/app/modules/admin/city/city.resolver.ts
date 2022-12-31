import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { Province, PaginatedCity, City } from "@pishroo/entities";
import { CityService } from "./city.service";

import {
  CreateCityAdminInputsGQL,
  DeleteCityAdminInputsGQL,
  GetCitiesAdminArgsGQL,
  GetCityByIdAdminArgsGQL,
  UpdateCityAdminInputsGQL,
} from "./dto";

@Resolver(() => City)
export class CityResolver {
  constructor(private cityService: CityService) {}

  @Mutation(() => City)
  @UseGuards(ProductAdminGuard)
  async createCityAdmin(
    @Args("createCityAdmin")
    inputs: CreateCityAdminInputsGQL
  ): Promise<City> {
    return await this.cityService.createCity(inputs);
  }

  @Mutation(() => City)
  @UseGuards(ProductAdminGuard)
  async updateCityAdmin(
    @Args("updateCityAdmin")
    inputs: UpdateCityAdminInputsGQL
  ): Promise<City> {
    return await this.cityService.updateCity(inputs);
  }

  @Mutation(() => City)
  @UseGuards(ProductAdminGuard)
  async deleteCityAdmin(
    @Args("deleteCityAdmin")
    inputs: DeleteCityAdminInputsGQL
  ): Promise<City> {
    return await this.cityService.deleteCity(inputs);
  }

  @Query(() => PaginatedCity, { nullable: true })
  @UseGuards(AdminGuard)
  async getCitiesAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetCitiesAdminArgsGQL
  ) {
    return this.cityService.getCities(paginationArgs, args);
  }

  @Query(() => City, { nullable: true })
  @UseGuards(AdminGuard)
  async getCityByIdAdmin(
    @Args() getCityByIdAdminArgs: GetCityByIdAdminArgsGQL
  ) {
    return this.cityService.getCityById(getCityByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Province, { nullable: false })
  @UseGuards(AdminGuard)
  async province(@Parent() city: City) {
    return this.cityService.province(city.id);
  }
}
