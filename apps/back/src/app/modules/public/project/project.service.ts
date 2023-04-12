import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  GetProjectByIdPublicArgs,
  GetProjectsPublicArgs,
  PaginationArgs,
} from "@pishroo/dto";
import { City, FileUse, Project, ProjectReview } from "@pishroo/entities";
import { CustomError, PROJECT_NOT_FOUND } from "@pishroo/http-exceptions";
import { isUUID } from "class-validator";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
    @InjectRepository(ProjectReview)
    private projectReviewRepo: Repository<ProjectReview>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async getProjects(
    paginationArgs: PaginationArgs,
    args: GetProjectsPublicArgs
  ) {
    const { search } = args;

    const queryBuilder = this.projectRepo
      .createQueryBuilder("project")
      .leftJoinAndSelect("project.city", "city");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(project.name) ilike LOWER(:search)) OR
          (LOWER(project.slug) ilike LOWER(:search)) OR
          (LOWER(project.description) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("project.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProjectById(args: GetProjectByIdPublicArgs): Promise<Project> {
    const { identity } = args;

    const queryBuilder = this.projectRepo.createQueryBuilder("project");

    if (isUUID(identity)) {
      queryBuilder.andWhere("product.id = :identity", {
        identity,
      });
    } else {
      queryBuilder.andWhere("product.slug = :identity", {
        identity,
      });
    }

    const project = await queryBuilder.getOne();

    if (!project) {
      throw new CustomError(PROJECT_NOT_FOUND);
    }

    return project;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async fileUses(projectId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.projectId = :projectId", {
        projectId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }

  async city(projectId: string): Promise<City> {
    const project = await this.projectRepo
      .createQueryBuilder("project")
      .andWhere("project.id = :projectId", {
        projectId,
      })
      .leftJoinAndSelect("project.city", "city")
      .leftJoinAndSelect("city.province", "province")
      .getOne();

    return project.city;
  }

  async projectReviews(projectId: string): Promise<ProjectReview[]> {
    return await this.projectReviewRepo
      .createQueryBuilder("projectReview")
      .andWhere("projectReview.projectId = :projectId", {
        projectId,
      })
      .getMany();
  }
}
