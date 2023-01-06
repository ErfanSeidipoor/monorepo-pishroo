import { PaginationArgsGQL } from "@back/dto";
import { MessageAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { CustomerMessage, Message, PaginatedMessage } from "@pishroo/entities";
import {
  CreateMessageAdminInputsGQL,
  DeleteMessageAdminInputsGQL,
  GetMessageByIdAdminArgsGQL,
  GetMessagesAdminArgsGQL,
  UpdateMessageActivationAdminInputsGQL,
  UpdateMessageAdminInputsGQL,
} from "./dto";
import { MessageService } from "./message.service";

@Resolver(() => Message)
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  @Mutation(() => Message)
  @UseGuards(MessageAdminGuard)
  async createMessageAdmin(
    @Args("createMessageAdmin")
    inputs: CreateMessageAdminInputsGQL
  ): Promise<Message> {
    return await this.messageService.createMessage(inputs);
  }

  @Mutation(() => Message)
  @UseGuards(MessageAdminGuard)
  async updateMessageAdmin(
    @Args("updateMessageAdmin")
    inputs: UpdateMessageAdminInputsGQL
  ): Promise<Message> {
    return await this.messageService.updateMessage(inputs);
  }

  @Mutation(() => Message)
  @UseGuards(MessageAdminGuard)
  async updateMessageActivationAdmin(
    @Args("updateMessageActivationAdmin")
    inputs: UpdateMessageActivationAdminInputsGQL
  ): Promise<Message> {
    return await this.messageService.updateMessageActivation(inputs);
  }

  @Mutation(() => Message)
  @UseGuards(MessageAdminGuard)
  async deleteMessageAdmin(
    @Args("deleteMessageAdmin")
    inputs: DeleteMessageAdminInputsGQL
  ): Promise<Message> {
    return await this.messageService.deleteMessage(inputs);
  }

  @Query(() => PaginatedMessage, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async getMessagesAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() args: GetMessagesAdminArgsGQL
  ) {
    return this.messageService.getMessages(paginationArgs, args);
  }

  @Query(() => Message, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async getMessageByIdAdmin(
    @Args() getMessageByIdAdminArgs: GetMessageByIdAdminArgsGQL
  ) {
    return this.messageService.getMessageById(getMessageByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [CustomerMessage], { nullable: false })
  @UseGuards(MessageAdminGuard)
  async customerMessages(
    @Parent() message: Message
  ): Promise<CustomerMessage[]> {
    return this.messageService.customerMessages(message.id);
  }
}
