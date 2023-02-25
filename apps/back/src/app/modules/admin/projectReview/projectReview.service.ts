import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateProjectReviewAdminInputs,
  DeleteProjectReviewAdminInputs,
  GetProjectReviewsAdminArgs,
  GetProjectReviewByIdAdminArgs,
  PaginationArgs,
  UpdateProjectReviewAdminInputs,
} from "@pishroo/dto";
import { ProjectReview, Project, FileUse, File } from "@pishroo/entities";
import { FileUseStatusEnum, FileUseTypeEnum } from "@back/enums";
import {
  CustomError,
  FILE_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  PRODUCT_REVIEW_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProjectReviewService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ProjectReview)
    private projectReviewRepo: Repository<ProjectReview>,
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
    @InjectRepository(File) private fileRepo: Repository<File>,
    @InjectRepository(FileUse) private fileUseRepo: Repository<FileUse>
  ) {}

  async createProjectReview(
    inputs: CreateProjectReviewAdminInputs
  ): Promise<ProjectReview> {
    const { fileId, isActive, projectId, reviewer, text } = inputs;

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

    const fileUse = this.fileUseRepo.create({
      file,
      type: FileUseTypeEnum.project_reviewer,
      status: FileUseStatusEnum.accepted,
    });

    /* --------------------------------- project -------------------------------- */
    const project = await this.projectRepo.findOne({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* ----------------------------- Project Review ----------------------------- */

    const projectReview = await this.projectReviewRepo.create({
      isActive,
      projectId,
      reviewer,
      text,
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(projectReview);
      fileUse.projectReviewId = projectReview.id;
      await manager.save(fileUse);
      await manager.save(file);
    });

    /* --------------------------------- output --------------------------------- */

    return projectReview;
  }

  async updateProjectReview(
    inputs: UpdateProjectReviewAdminInputs
  ): Promise<ProjectReview> {
    const { fileId, isActive, projectId, projectReviewId, reviewer, text } =
      inputs;

    const projectReview = await this.projectReviewRepo.findOne({
      where: {
        id: projectReviewId,
      },
      relations: ["fileUses", "fileUses.file", "project"],
    });

    if (!projectReview) {
      throw new CustomError(PRODUCT_REVIEW_NOT_FOUND);
    }
    console.log({ projectReview });

    /* ----------------------------- file & fileUse ----------------------------- */

    let file: File;
    let fileUse: FileUse;
    let isFound = false;

    for (const fileUse_ of projectReview.fileUses) {
      if (fileUse_.fileId === fileId) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      file = await this.fileRepo.findOne({
        where: {
          id: fileId,
          isUsed: false,
        },
      });

      if (!file) {
        throw new CustomError(FILE_NOT_FOUND);
      }

      file.isUsed = true;

      fileUse = this.fileUseRepo.create({
        file,
        type: FileUseTypeEnum.project_reviewer,
        status: FileUseStatusEnum.accepted,
      });
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(projectReview, {
      isActive,
      projectId,
      reviewer,
      text,
    });

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      await manager.save(projectReview);

      if (fileUse) {
        await manager.softRemove(projectReview.fileUses);
        fileUse.projectReviewId = projectReview.id;
        await manager.save(fileUse);
        await manager.save(file);
      }
    });

    /* --------------------------------- output --------------------------------- */

    if (fileUse) {
      projectReview.fileUses = [fileUse];
    }

    return projectReview;
  }

  async deleteProjectReview(
    inputs: DeleteProjectReviewAdminInputs
  ): Promise<ProjectReview> {
    const { projectReviewId } = inputs;

    const projectReview = await this.projectReviewRepo.findOne({
      where: {
        id: projectReviewId,
      },
    });

    if (!projectReview) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    /* --------------------------------- saving --------------------------------- */

    await this.dataSource.transaction(async (manager) => {
      projectReview.fileUses &&
        (await manager.softRemove(projectReview.fileUses));
      await manager.softRemove(projectReview);
    });

    return projectReview;
  }

  async getProjectReviews(
    paginationArgs: PaginationArgs,
    args: GetProjectReviewsAdminArgs
  ) {
    const { projectId, reviewer, text } = args;

    const queryBuilder = this.projectReviewRepo
      .createQueryBuilder("projectReview")
      .leftJoinAndSelect("projectReview.fileUses", "fileUse")
      .leftJoinAndSelect("fileUse.file", "file");

    /* --------------------------------- filters -------------------------------- */

    if (projectId) {
      queryBuilder.andWhere("projectReview.projectId = :projectId", {
        projectId,
      });
    }

    if (reviewer) {
      queryBuilder.andWhere("projectReview.reviewer ilike :reviewer", {
        reviewer: `%${reviewer}%`,
      });
    }

    if (text) {
      queryBuilder.andWhere("projectReview.text ilike :text", {
        text: `%${text}%`,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("projectReview.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProjectReviewById(
    args: GetProjectReviewByIdAdminArgs
  ): Promise<ProjectReview> {
    const { projectReviewId } = args;

    const projectReview = await this.projectReviewRepo
      .createQueryBuilder("projectReview")
      .leftJoinAndSelect("projectReview.fileUses", "fileUse")
      .leftJoinAndSelect("fileUse.file", "file")
      .andWhere("projectReview.id = :projectReviewId", {
        projectReviewId,
      })
      .getOne();

    if (!projectReview) {
      throw new CustomError(PRODUCT_REVIEW_NOT_FOUND);
    }

    return projectReview;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async fileUses(projectReviewId: string): Promise<FileUse[]> {
    return await this.fileUseRepo
      .createQueryBuilder("fileUse")
      .andWhere("fileUse.projectReviewId = :projectReviewId", {
        projectReviewId,
      })
      .leftJoinAndSelect("fileUse.file", "file")
      .getMany();
  }

  async project(projectReviewId: string): Promise<Project> {
    const projectReview = await this.projectReviewRepo
      .createQueryBuilder("projectReview")
      .andWhere("projectReview.id = :projectReviewId", {
        projectReviewId,
      })
      .leftJoinAndSelect("projectReview.project", "project")
      .getOne();

    return projectReview.project;
  }
}
