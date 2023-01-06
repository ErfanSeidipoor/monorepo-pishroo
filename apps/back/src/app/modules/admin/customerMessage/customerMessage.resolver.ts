import { MessageAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { CustomerMessage, Message } from "@pishroo/entities";
import { CustomerMessageService } from "./customerMessage.service";
import {
  CreateCustomerMessageAdminInputsGQL,
  DeleteCustomerMessageAdminInputsGQL,
} from "./dto";

@Resolver(() => CustomerMessage)
export class CustomerMessageResolver {
  constructor(private customerMessageService: CustomerMessageService) {}

  @Mutation(() => CustomerMessage)
  @UseGuards(MessageAdminGuard)
  async createCustomerMessageAdmin(
    @Args("createCustomerMessageAdmin")
    inputs: CreateCustomerMessageAdminInputsGQL
  ): Promise<CustomerMessage> {
    return await this.customerMessageService.createCustomerMessage(inputs);
  }
  @Mutation(() => CustomerMessage)
  @UseGuards(MessageAdminGuard)
  async deleteCustomerMessageAdmin(
    @Args("deleteCustomerMessageAdmin")
    inputs: DeleteCustomerMessageAdminInputsGQL
  ): Promise<CustomerMessage> {
    return await this.customerMessageService.deleteCustomerMessage(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Message, { nullable: false })
  @UseGuards(MessageAdminGuard)
  async customerMessages(
    @Parent() customerMessage: CustomerMessage
  ): Promise<Message> {
    return this.customerMessageService.message(customerMessage.id);
  }
}
