import { UserId } from "@back/decorators";
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
import {
  Call,
  Customer,
  PaginatedCall,
  Producer,
  Transporter,
  User,
} from "@pishroo/entities";
import { CallService } from "./call.service";
import {
  CreateCallAdminInputsGQL,
  DeleteCallAdminInputsGQL,
  GetCallByIdAdminArgsGQL,
  GetCallsAdminArgsGQL,
  InsertDailyCallsAdminInputsGQL,
  UpdateCallAdminInputsGQL,
} from "./dto";

@Resolver(() => Call)
export class CallResolver {
  constructor(private callService: CallService) {}

  @Mutation(() => [Call])
  @UseGuards(MessageAdminGuard)
  async insertDailyCalls(
    @UserId() userId: string,
    @Args("insertDailyCallsAdminInputs")
    inputs: InsertDailyCallsAdminInputsGQL
  ): Promise<Call[]> {
    return await this.callService.insertDailyCalls(userId, inputs);
  }

  @Mutation(() => Call)
  @UseGuards(MessageAdminGuard)
  async createCallAdmin(
    @UserId() userId: string,
    @Args("createCallAdminInputs")
    inputs: CreateCallAdminInputsGQL
  ): Promise<Call> {
    return await this.callService.createCall(userId, inputs);
  }

  @Mutation(() => Call)
  @UseGuards(MessageAdminGuard)
  async updateCallAdmin(
    @Args("updateCallAdminInputs")
    inputs: UpdateCallAdminInputsGQL
  ): Promise<Call> {
    return await this.callService.updateCall(inputs);
  }

  @Mutation(() => Call)
  @UseGuards(MessageAdminGuard)
  async deleteCallAdmin(
    @Args("deleteCallAdminInputs")
    inputs: DeleteCallAdminInputsGQL
  ): Promise<Call> {
    return await this.callService.deleteCall(inputs);
  }

  @Query(() => PaginatedCall, { nullable: false })
  @UseGuards(MessageAdminGuard)
  async getCallsAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getCallsAdminArgs") args: GetCallsAdminArgsGQL
  ) {
    return this.callService.getCalls(paginationArgs, args);
  }

  @Query(() => Call, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async getCallByIdAdmin(
    @Args() getCallByIdAdminArgs: GetCallByIdAdminArgsGQL
  ) {
    return this.callService.getCallById(getCallByIdAdminArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => Transporter, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async transporter(@Parent() call: Call) {
    return this.callService.transporter(call.id);
  }

  @ResolveField(() => Producer, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async producer(@Parent() call: Call) {
    return this.callService.producer(call.id);
  }

  @ResolveField(() => Customer, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async customer(@Parent() call: Call) {
    return this.callService.customer(call.id);
  }

  @ResolveField(() => User, { nullable: true })
  @UseGuards(MessageAdminGuard)
  async user(@Parent() call: Call) {
    return this.callService.user(call.id);
  }
}
