import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateTransporterAgentAdminInputs,
  DeleteTransporterAgentAdminInputs,
  GetTransporterAgentByIdAdminArgs,
  GetTransporterAgentsAdminArgs,
  PaginationArgs,
  UpdateTransporterAgentActivationAdminInputs,
  UpdateTransporterAgentAdminInputs,
} from "@pishroo/dto";
import { Transporter, TransporterAgent } from "@pishroo/entities";
import {
  CustomError,
  TRANSPORTER_AGENT_NOT_FOUND,
  TRANSPORTER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST,
  TRANSPORTER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST,
  TRANSPORTER_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TransporterAgentService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Transporter)
    private transporterRepo: Repository<Transporter>,
    @InjectRepository(TransporterAgent)
    private transporterAgentRepo: Repository<TransporterAgent>
  ) {}

  async createTransporterAgent(
    inputs: CreateTransporterAgentAdminInputs
  ): Promise<TransporterAgent> {
    const {
      isActive,
      firstName,
      lastName,
      description,
      email,
      phone,
      transporterId,
    } = inputs;

    /* ---------------------- checking name duplication --------------------- */

    const phoneDuplication = await this.transporterAgentRepo.findOne({
      where: {
        phone,
      },
    });

    if (phoneDuplication) {
      throw new CustomError(TRANSPORTER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST);
    }

    /* --------------------- checking email duplication --------------------- */

    const emailDuplication = await this.transporterAgentRepo.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(TRANSPORTER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST);
    }
    /* ---------------------------------- city ---------------------------------- */

    const transporter = await this.transporterRepo.findOne({
      where: {
        id: transporterId,
      },
    });

    if (!transporter) {
      throw new CustomError(TRANSPORTER_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const transporterAgent = this.transporterAgentRepo.create({
      transporter,
      isActive,
      firstName,
      lastName,
      description,
      email: email.toLowerCase(),
      phone,
    });

    /* --------------------------------- output --------------------------------- */

    return await transporterAgent.save();
  }

  async updateTransporterAgent(
    inputs: UpdateTransporterAgentAdminInputs
  ): Promise<TransporterAgent> {
    const {
      isActive,
      firstName,
      lastName,
      transporterAgentId,
      description,
      email,
      phone,
    } = inputs;

    const transporterAgent = await this.transporterAgentRepo.findOne({
      where: {
        id: transporterAgentId,
      },
    });

    if (!transporterAgent) {
      throw new CustomError(TRANSPORTER_AGENT_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (phone !== transporterAgent.phone) {
      const phoneDuplication = await this.transporterAgentRepo.findOne({
        where: {
          phone,
        },
      });

      if (phoneDuplication) {
        throw new CustomError(TRANSPORTER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST);
      }
    }

    /* --------------------- checking email duplication --------------------- */
    if (email !== transporterAgent.email) {
      const emailDuplication = await this.transporterAgentRepo.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (emailDuplication) {
        throw new CustomError(TRANSPORTER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST);
      }
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(transporterAgent, {
      isActive,
      firstName,
      lastName,
      description,
      email: email.toLowerCase(),
      phone,
    });

    /* --------------------------------- output --------------------------------- */

    return await transporterAgent.save();
  }

  async deleteTransporterAgent(
    inputs: DeleteTransporterAgentAdminInputs
  ): Promise<TransporterAgent> {
    const { transporterAgentId } = inputs;

    const transporterAgent = await this.transporterAgentRepo.findOne({
      where: {
        id: transporterAgentId,
      },
    });

    if (!transporterAgent) {
      throw new CustomError(TRANSPORTER_AGENT_NOT_FOUND);
    }
    // todo > adding some login before removing

    /* --------------------------------- saving --------------------------------- */
    return await transporterAgent.softRemove();
  }

  async updateTransporterAgentActivation(
    inputs: UpdateTransporterAgentActivationAdminInputs
  ): Promise<TransporterAgent> {
    const { isActive, transporterAgentId } = inputs;

    const transporterAgent = await this.transporterAgentRepo.findOne({
      where: {
        id: transporterAgentId,
      },
    });

    if (!transporterAgent) {
      throw new CustomError(TRANSPORTER_AGENT_NOT_FOUND);
    }

    transporterAgent.isActive = isActive;

    return await transporterAgent.save();
  }

  async getTransporterAgents(
    paginationArgs: PaginationArgs,
    args: GetTransporterAgentsAdminArgs
  ) {
    const { isActive, search, transporterId } = args;

    const queryBuilder =
      this.transporterAgentRepo.createQueryBuilder("transporterAgent");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(transporterAgent.firstName) ilike LOWER(:search)) OR
          (LOWER(transporterAgent.lastName) ilike LOWER(:search)) OR
          (LOWER(transporterAgent.email) ilike LOWER(:search)) OR
          (LOWER(transporterAgent.phone) ilike LOWER(:search)) OR
          (LOWER(transporterAgent.description) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("transporterAgent.isActive = :isActive", {
        isActive,
      });
    }

    if (transporterId) {
      queryBuilder.andWhere("transporterAgent.transporterId = :transporterId", {
        transporterId,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("transporterAgent.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getTransporterAgentById(
    args: GetTransporterAgentByIdAdminArgs
  ): Promise<TransporterAgent> {
    const { transporterAgentId } = args;

    const transporterAgent = await this.transporterAgentRepo
      .createQueryBuilder("transporterAgent")
      .andWhere("transporterAgent.id = :transporterAgentId", {
        transporterAgentId,
      })
      .getOne();

    if (!transporterAgentId) {
      throw new CustomError(TRANSPORTER_AGENT_NOT_FOUND);
    }

    return transporterAgent;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async transporter(transporterAgentId: string): Promise<Transporter> {
    const transporterAgent = await this.transporterAgentRepo
      .createQueryBuilder("transporterAgent")
      .andWhere("transporterAgent.id = :transporterAgentId", {
        transporterAgentId,
      })
      .leftJoinAndSelect("transporterAgent.transporter", "transporter")
      .getOne();

    return transporterAgent.transporter;
  }
}
