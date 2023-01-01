import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  AddImageToProjectAdminInputs,
  CreateProjectAdminInputs,
  DeleteProjectAdminInputs,
  GetProjectByIdAdminArgs,
  GetProjectsAdminArgs,
  PaginationArgs,
  RemoveImageFromProjectAdminInputs,
  UpdateProjectActivationAdminInputs,
  UpdateProjectAdminInputs,
} from "@pishroo/dto";
import { City, File, FileUse, Project, ProjectReview } from "@pishroo/entities";
import { FileUseStatusEnum, FileUseTypeEnum } from "@pishroo/enums";
import {
  CITY_NOT_FOUND,
  CustomError,
  FILE_NOT_FOUND,
  FILE_USE_NOT_FOUND,
  PROJECT_NOT_FOUND,
  PROJECT_WITH_THIS_SLUG_ALREADY_EXIST,
  PROJECT_WITH_THIS_NAME_ALREADY_EXIST,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProjectService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
    @InjectRepository(ProjectReview)
    private projectReviewRepo: Repository<ProjectReview>,
    @InjectRepository(City) private cityRepo: Repository<City>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createProject(inputs: CreateProjectAdminInputs): Promise<Project> {
    const { isActive, name, slug, description, cityId, lat, long } = inputs;

    /* ---------------------- checking name duplication --------------------- */

    const nameDuplication = await this.projectRepo.findOne({
      where: {
        name,
      },
    });

    if (nameDuplication) {
      throw new CustomError(PROJECT_WITH_THIS_NAME_ALREADY_EXIST);
    }

    /* --------------------- checking email duplication --------------------- */

    const slugDuplication = await this.projectRepo.findOne({
      where: {
        slug: slug.toLowerCase(),
      },
    });

    if (slugDuplication) {
      throw new CustomError(PROJECT_WITH_THIS_SLUG_ALREADY_EXIST);
    }

    /* ---------------------------------- city ---------------------------------- */

    const city = await this.cityRepo.findOne({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const project = this.projectRepo.create({
      isActive,
      name,
      slug: slug.toLowerCase(),
      description,
      cityId,
      lat,
      long,
    });

    /* --------------------------------- output --------------------------------- */

    return await project.save();
  }

  async updateProject(inputs: UpdateProjectAdminInputs): Promise<Project> {
    const { projectId, isActive, name, slug, description, cityId, lat, long } =
      inputs;

    const project = await this.projectRepo.findOne({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new CustomError(PROJECT_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (name !== project.name) {
      const nameDuplication = await this.projectRepo.findOne({
        where: {
          name,
        },
      });

      if (nameDuplication) {
        throw new CustomError(PROJECT_WITH_THIS_NAME_ALREADY_EXIST);
      }
    }

    /* --------------------- checking email duplication --------------------- */
    if (slug !== project.slug) {
      const slugDuplication = await this.projectRepo.findOne({
        where: {
          slug: slug.toLowerCase(),
        },
      });

      if (slugDuplication) {
        throw new CustomError(PROJECT_WITH_THIS_SLUG_ALREADY_EXIST);
      }
    }

    /* ---------------------------------- city ---------------------------------- */

    const city = await this.cityRepo.find({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new CustomError(CITY_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(project, {
      isActive,
      name,
      slug: slug.toLowerCase(),
      description,
      cityId,
      lat,
      long,
    });

    /* --------------------------------- output --------------------------------- */

    return await project.save();
  }

  async deleteProject(inputs: DeleteProjectAdminInputs): Promise<Project> {
    const { projectId } = inputs;

    const project = await this.projectRepo.findOne({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new CustomError(PROJECT_NOT_FOUND);
    }
    // todo > adding some login before removing

    /* --------------------------------- saving --------------------------------- */
    await this.projectRepo.softRemove(project);
    return project;
  }

  async updateProjectActivation(
    inputs: UpdateProjectActivationAdminInputs
  ): Promise<Project> {
    const { isActive, projectId } = inputs;

    const project = await this.projectRepo.findOne({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new CustomError(PROJECT_NOT_FOUND);
    }

    project.isActive = isActive;

    return await project.save();
  }

  async getProjects(
    paginationArgs: PaginationArgs,
    args: GetProjectsAdminArgs
  ) {
    const { isActive, search, cityIds, provinceIds } = args;

    const queryBuilder = this.projectRepo
      .createQueryBuilder("project")
      .leftJoinAndSelect("project.city", "city");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(project.name) ilike LOWER(:search)) OR
          (LOWER(project.phone) ilike LOWER(:search)) OR
          (LOWER(project.email) ilike LOWER(:search)) OR
          (LOWER(project.description) ilike LOWER(:search)) OR
          (LOWER(project.address) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("project.isActive = :isActive", {
        isActive,
      });
    }

    if (cityIds && cityIds.length) {
      queryBuilder.andWhere("project.cityId IN (:...cityIds)", { cityIds });
    }

    if (provinceIds && provinceIds.length) {
      queryBuilder.andWhere("city.provinceId IN (:...provinceIds)", {
        provinceIds,
      });
    }
    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("project.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProjectById(args: GetProjectByIdAdminArgs): Promise<Project> {
    const { projectId } = args;

    const project = await this.projectRepo
      .createQueryBuilder("project")
      .andWhere("project.id = :projectId", {
        projectId,
      })
      .getOne();

    if (!project) {
      throw new CustomError(PROJECT_NOT_FOUND);
    }

    return project;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Image                                   */
  /* -------------------------------------------------------------------------- */

  async removeImageFromProject(args: RemoveImageFromProjectAdminInputs) {
    const { fileUseId } = args;

    /* ---------------------------------- file ---------------------------------- */

    const fileUse = await this.fileUseRepo.findOne({
      where: {
        id: fileUseId,
        type: FileUseTypeEnum.project,
      },
      relations: ["file", "project"],
    });

    if (!fileUse) {
      throw new CustomError(FILE_USE_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.softRemove(fileUse.file);
      await manager.softRemove(fileUse);
    });

    return fileUse.project;
  }

  async addImageToProject(
    args: AddImageToProjectAdminInputs
  ): Promise<Project> {
    const { fileId, projectId } = args;

    /* ---------------------------------- file ---------------------------------- */
    const file = await this.fileRepo.findOne({
      where: {
        id: fileId,
        isUsed: false,
      },
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    file.isUsed = true;
    /* --------------------------------- project -------------------------------- */
    const project = await this.projectRepo.findOne({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new CustomError(PROJECT_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    const fileUse = this.fileUseRepo.create({
      file,
      project,
      type: FileUseTypeEnum.project,
      status: FileUseStatusEnum.accepted,
    });

    await this.dataSource.transaction(async (manager) => {
      await manager.save(file);
      await manager.save(fileUse);
    });

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
