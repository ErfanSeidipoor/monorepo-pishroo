import { PaginationArgsGQL } from "@back/dto";
import { CustomerAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { City, Customer, PaginatedCustomer } from "@pishroo/entities";

import { CustomerService } from "./customer.service";
import {
  CreateCustomerAdminInputsGQL,
  DeleteCustomerAdminInputsGQL,
  GetCustomerByIdAdminArgsGQL,
  GetCustomersAdminArgsGQL,
  UpdateCustomerActivationAdminInputsGQL,
  UpdateCustomerAdminInputsGQL,
} from "./dto";

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Mutation(() => Customer)
  @UseGuards(CustomerAdminGuard)
  async createCustomerAdmin(
    @Args("createCustomerAdminInputs")
    inputs: CreateCustomerAdminInputsGQL
  ): Promise<Customer> {
    return await this.customerService.createCustomer(inputs);
  }

  @Mutation(() => Customer)
  @UseGuards(CustomerAdminGuard)
  async updateCustomerAdmin(
    @Args("updateCustomerAdminInputs")
    inputs: UpdateCustomerAdminInputsGQL
  ): Promise<Customer> {
    return await this.customerService.updateCustomer(inputs);
  }

  @Mutation(() => Customer)
  @UseGuards(CustomerAdminGuard)
  async updateCustomerActivationAdmin(
    @Args("updateCustomerActivationAdmin")
    inputs: UpdateCustomerActivationAdminInputsGQL
  ): Promise<Customer> {
    return await this.customerService.updateCustomerActivation(inputs);
  }

  @Mutation(() => Customer)
  @UseGuards(CustomerAdminGuard)
  async deleteCustomerAdmin(
    @Args("deleteCustomerAdmin")
    inputs: DeleteCustomerAdminInputsGQL
  ): Promise<Customer> {
    return await this.customerService.deleteCustomer(inputs);
  }

  @Query(() => PaginatedCustomer, { nullable: false })
  @UseGuards(CustomerAdminGuard)
  async getCustomersAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getCustomersAdminArgs") args: GetCustomersAdminArgsGQL
  ) {
    return this.customerService.getCustomers(paginationArgs, args);
  }

  @Query(() => Customer, { nullable: true })
  @UseGuards(CustomerAdminGuard)
  async getCustomerByIdAdmin(
    @Args() getCustomerByIdAdminArgs: GetCustomerByIdAdminArgsGQL
  ) {
    return this.customerService.getCustomerById(getCustomerByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => City, { nullable: false })
  @UseGuards(CustomerAdminGuard)
  async city(@Parent() customer: Customer) {
    return this.customerService.city(customer.id);
  }
}
