import { UserId } from "@back/decorators";
import { AdminGuard, SuperAdminGuard } from "@back/guards";
import { Ctx } from "@back/types/context.type";
import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "@pishroo/entities";
import { AuthService } from "./auth.service";
// dto
import { CreateUserAdminInputsGQL, LoginAdminInputsGQL } from "./dto";

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

  @Query(() => ({ users: [User] }), { nullable: true })
  @UseGuards(AdminGuard)
  async getUsersAdmin() {
    return { users: await this.authService.getUsers() };
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
}
