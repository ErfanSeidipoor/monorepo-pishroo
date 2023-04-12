import { UserId } from "@back/decorators";
import { PaginationArgsGQL } from "@back/dto";
import { AdminGuard, SuperAdminGuard } from "@back/guards";
import { Ctx } from "@back/types/context.type";
import { UseGuards } from "@nestjs/common";
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { FileUse, PaginatedUser, ProvinceUser, User } from "@pishroo/entities";
import { AuthService } from "./auth.service";
// dto
import {
  AddImageToUserAdminInputsGQL,
  CreateUserAdminInputsGQL,
  GetUserByIdAdminArgsGQL,
  GetUsersAdminArgsGQL,
  LoginAdminInputsGQL,
  RemoveImageFromUserAdminInputsGQL,
  UpdateUserActivationAdminInputsGQL,
  UpdateUserAdminInputsGQL,
  UpdateUserProvincesAdminInputsGQL,
} from "./dto";

@Resolver(() => User)
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

  @Query(() => PaginatedUser, { nullable: false })
  @UseGuards(AdminGuard)
  async getUsersAdmin(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getUsersAdminArgs") getUsersAdminArgs: GetUsersAdminArgsGQL
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
    @Args("createUserAdminInputs")
    CreateUserAdminInputs: CreateUserAdminInputsGQL
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
    @Args("updateUserAdminInputs")
    updateUserAdminInputs: UpdateUserAdminInputsGQL
  ): Promise<User> {
    return await this.authService.updateUser(updateUserAdminInputs);
  }

  @Mutation(() => User)
  @UseGuards(SuperAdminGuard)
  async updateUserProvincesAdmin(
    @Args("updateUserProvincesAdminInputs")
    inputs: UpdateUserProvincesAdminInputsGQL
  ): Promise<User> {
    return await this.authService.UpdateUserProvinces(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  @Mutation(() => User)
  @UseGuards(SuperAdminGuard)
  async addImageToUserAdmin(
    @Args("addImageToUserAdminInputs")
    inputs: AddImageToUserAdminInputsGQL
  ): Promise<User> {
    return await this.authService.addImageToUser(inputs);
  }

  @Mutation(() => User)
  @UseGuards(SuperAdminGuard)
  async removeImageFromUserAdmin(
    @Args("removeImageFromUserAdminInputs")
    inputs: RemoveImageFromUserAdminInputsGQL
  ): Promise<User> {
    return await this.authService.removeImageFromUser(inputs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [FileUse], { nullable: false })
  @UseGuards(SuperAdminGuard)
  async fileUses(@Parent() user: User) {
    return this.authService.fileUses(user.id);
  }

  @ResolveField(() => [ProvinceUser], { nullable: false })
  @UseGuards(SuperAdminGuard)
  async provinceUsers(@Parent() user: User) {
    return this.authService.provinceUsers(user.id);
  }
}
