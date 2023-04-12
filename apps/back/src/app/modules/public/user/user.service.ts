import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GetUsersPublicArgs, PaginationArgs } from "@pishroo/dto";
import { ProvinceUser, User } from "@pishroo/entities";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(ProvinceUser)
    private provinceUserRepo: Repository<ProvinceUser>
  ) {}

  async getUsers(
    paginationArgs: PaginationArgs,
    getUsersPublicArgs: GetUsersPublicArgs
  ) {
    const queryBuilder = this.userRepo.createQueryBuilder("user");

    /* -------------------------------------------------------------------------- */
    /*                                   filters                                  */
    /* -------------------------------------------------------------------------- */

    // if (roles && roles.length) {
    //   queryBuilder.andWhere("user.roles <:roles", {
    //     roles: [UserRoleEnum.admin_content, UserRoleEnum.supper_admin],
    //   });
    // }

    // if (typeof isActive !== "undefined") {
    //   queryBuilder.andWhere("user.isActive = :isActive", {
    //     isActive,
    //   });
    // }

    /* -------------------------------------------------------------------------- */
    /*                                    Order                                   */
    /* -------------------------------------------------------------------------- */

    queryBuilder.addOrderBy("user.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async provinceUsers(userId: string): Promise<ProvinceUser[]> {
    return await this.provinceUserRepo
      .createQueryBuilder("provinceUser")
      .andWhere("provinceUser.userId = :userId", {
        userId,
      })
      .leftJoinAndSelect("provinceUser.province", "province")
      .getMany();
  }
}
