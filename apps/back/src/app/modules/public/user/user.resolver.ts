import { PaginationArgsGQL } from "@back/dto";
import { SuperAdminGuard } from "@back/guards";
import { UseGuards } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { PaginatedUser, ProvinceUser, User } from "@pishroo/entities";
import { UserService } from "./user.service";
// dto
import { GetUsersPublicArgsGQL } from "./dto";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => PaginatedUser, { nullable: false })
  async getUsersPublic(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getUsersPublicArgs") getUsersPublicArgs: GetUsersPublicArgsGQL
  ) {
    return this.userService.getUsers(paginationArgs, getUsersPublicArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  @ResolveField(() => [ProvinceUser], { nullable: false })
  @UseGuards(SuperAdminGuard)
  async provinceUsers(@Parent() user: User) {
    return this.userService.provinceUsers(user.id);
  }
}
