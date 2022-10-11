import { UserId } from "@back/decorators";
import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, SuperAdminGuard } from "@back/guards";
import { Ctx } from "@back/types/context.type";
import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PaginatedUser, User } from "@pishroo/entities";
import { AuthService } from "./auth.service";
// dto
import {
  CreateUserAdminInputsGQL,
  GetUserByIdAdminArgsGQL,
  GetUsersAdminArgsGQL,
  LoginAdminInputsGQL,
  UpdateUserActivationAdminInputsGQL,
  UpdateUserAdminInputsGQL,
} from "./dto";

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User)
  async loginAdmin(
    @Args("loginAdminInputs") loginAdminInputs: LoginAdminInputsGQL,
    @Context() context: Ctx
  ): Promise<User> {
    return await this.authService.login(context, loginAdminInputs);
  }

  @Query(() => User, { nullable: true })
  @UseGuards(AdminGuard)
  async meAdmin(@UserId() userId: string) {
    return await this.authService.me(userId);
  }

  @Query(() => PaginatedUser, { nullable: true })
  @UseGuards(AdminGuard)
  async getUsersAdmin(
    @Args() paginationArgs: PaginationArgsGQL,
    @Args() getUsersAdminArgs: GetUsersAdminArgsGQL
  ) {
    return this.authService.getUsers(paginationArgs, getUsersAdminArgs);
  }

  @Query(() => User, { nullable: true })
  @UseGuards(AdminGuard)
  async getUserByIdAdmin(
    @Args() getUserByIdAdminArgs: GetUserByIdAdminArgsGQL
  ) {
    return this.authService.getUserById(getUserByIdAdminArgs);
  }

  @Query(() => User, { nullable: true })
  async logoutAdmin(@Context() context: Ctx) {
    return await this.authService.logout(context);
  }

  @Mutation(() => User)
  @UseGuards(SuperAdminGuard)
  async createUserAdmin(
    @Args("createUserAdmin") CreateUserAdminInputs: CreateUserAdminInputsGQL
  ): Promise<User> {
    return await this.authService.createUser(CreateUserAdminInputs);
  }

  @Mutation(() => User)
  @UseGuards(SuperAdminGuard)
  async updateUserActivationAdmin(
    @Args("updateUserActivationAdmin")
    updateUserActivationAdminInputs: UpdateUserActivationAdminInputsGQL
  ): Promise<User> {
    return await this.authService.updateUserActivation(
      updateUserActivationAdminInputs
    );
  }

  @Mutation(() => User)
  @UseGuards(SuperAdminGuard)
  async updateUserAdmin(
    @Args("updateUserAdmin")
    updateUserAdminInputs: UpdateUserAdminInputsGQL
  ): Promise<User> {
    return await this.authService.updateUser(updateUserAdminInputs);
  }
}
