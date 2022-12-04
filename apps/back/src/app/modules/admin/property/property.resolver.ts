import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, ProductAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  Property,
  PaginatedProperty,
  ProductProperty,
} from "@pishroo/entities";
import { PropertyService } from "./property.service";
import {
  CreatePropertyAdminInputsGQL,
  DeletePropertyAdminInputsGQL,
  GetPropertiesAdminArgsGQL,
  GetPropertyByIdAdminArgsGQL,
  UpdatePropertyActivationAdminInputsGQL,
  UpdatePropertyAdminInputsGQL,
} from "./dto";

@Resolver(() => Property)
export class PropertyResolver {
  constructor(private propertyService: PropertyService) {}

  @Mutation(() => Property)
  @UseGuards(ProductAdminGuard)
  async createPropertyAdmin(
    @Args("createPropertyAdmin")
    inputs: CreatePropertyAdminInputsGQL
  ): Promise<Property> {
    return await this.propertyService.createProperty(inputs);
  }

  @Mutation(() => Property)
  @UseGuards(ProductAdminGuard)
  async updatePropertyAdmin(
    @Args("updatePropertyAdmin")
    inputs: UpdatePropertyAdminInputsGQL
  ): Promise<Property> {
    return await this.propertyService.updateProperty(inputs);
  }

  @Mutation(() => Property)
  @UseGuards(ProductAdminGuard)
  async updatePropertyActivationAdmin(
    @Args("updatePropertyActivationAdmin")
    inputs: UpdatePropertyActivationAdminInputsGQL
  ): Promise<Property> {
    return await this.propertyService.updatePropertyActivation(inputs);
  }

  @Mutation(() => Property)
  @UseGuards(ProductAdminGuard)
  async deletePropertyAdmin(
    @Args("deletePropertyAdmin")
    inputs: DeletePropertyAdminInputsGQL
  ): Promise<Property> {
    return await this.propertyService.deleteProperty(inputs);
  }

  @Query(() => PaginatedProperty, { nullable: true })
  @UseGuards(AdminGuard)
  async getPropertiesAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetPropertiesAdminArgsGQL
  ) {
    return this.propertyService.getProperties(paginationArgs, args);
  }

  @Query(() => Property, { nullable: true })
  @UseGuards(AdminGuard)
  async getPropertyByIdAdmin(
    @Args() getPropertyByIdAdminArgs: GetPropertyByIdAdminArgsGQL
  ) {
    return this.propertyService.getPropertyById(getPropertyByIdAdminArgs);
  }
}
