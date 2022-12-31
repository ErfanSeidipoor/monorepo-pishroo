import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateProducerAgentAdminInputs,
  DeleteProducerAgentAdminInputs,
  GetProducerAgentByIdAdminArgs,
  GetProducerAgentsAdminArgs,
  PaginationArgs,
  UpdateProducerAgentActivationAdminInputs,
  UpdateProducerAgentAdminInputs,
} from "@pishroo/dto";
import { Producer, ProducerAgent } from "@pishroo/entities";
import {
  CustomError,
  PRODUCER_AGENT_NOT_FOUND,
  PRODUCER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST,
  PRODUCER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST,
  PRODUCER_NOT_FOUND,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ProducerAgentService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Producer)
    private producerRepo: Repository<Producer>,
    @InjectRepository(ProducerAgent)
    private producerAgentRepo: Repository<ProducerAgent>
  ) {}

  async createProducerAgent(
    inputs: CreateProducerAgentAdminInputs
  ): Promise<ProducerAgent> {
    const {
      isActive,
      firstName,
      lastName,
      description,
      email,
      phone,
      producerId,
    } = inputs;

    /* ---------------------- checking name duplication --------------------- */

    const phoneDuplication = await this.producerAgentRepo.findOne({
      where: {
        phone,
      },
    });

    if (phoneDuplication) {
      throw new CustomError(PRODUCER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST);
    }

    /* --------------------- checking email duplication --------------------- */

    const emailDuplication = await this.producerAgentRepo.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailDuplication) {
      throw new CustomError(PRODUCER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST);
    }
    /* ---------------------------------- city ---------------------------------- */

    const producer = await this.producerRepo.findOne({
      where: {
        id: producerId,
      },
    });

    if (!producer) {
      throw new CustomError(PRODUCER_NOT_FOUND);
    }

    /* -------------------------------- creating -------------------------------- */

    const producerAgent = this.producerAgentRepo.create({
      producer,
      isActive,
      firstName,
      lastName,
      description,
      email: email.toLowerCase(),
      phone,
    });

    /* --------------------------------- output --------------------------------- */

    return await producerAgent.save();
  }

  async updateProducerAgent(
    inputs: UpdateProducerAgentAdminInputs
  ): Promise<ProducerAgent> {
    const {
      isActive,
      firstName,
      lastName,
      producerAgentId,
      description,
      email,
      phone,
    } = inputs;

    const producerAgent = await this.producerAgentRepo.findOne({
      where: {
        id: producerAgentId,
      },
    });

    if (!producerAgent) {
      throw new CustomError(PRODUCER_AGENT_NOT_FOUND);
    }

    /* ------------------------ checking name duplication ----------------------- */
    if (phone !== producerAgent.phone) {
      const phoneDuplication = await this.producerAgentRepo.findOne({
        where: {
          phone,
        },
      });

      if (phoneDuplication) {
        throw new CustomError(PRODUCER_AGENT_WITH_THIS_PHONE_ALREADY_EXIST);
      }
    }

    /* --------------------- checking email duplication --------------------- */
    if (email !== producerAgent.email) {
      const emailDuplication = await this.producerAgentRepo.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (emailDuplication) {
        throw new CustomError(PRODUCER_AGENT_WITH_THIS_EAMIL_ALREADY_EXIST);
      }
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(producerAgent, {
      isActive,
      firstName,
      lastName,
      description,
      email: email.toLowerCase(),
      phone,
    });

    /* --------------------------------- output --------------------------------- */

    return await producerAgent.save();
  }

  async deleteProducerAgent(
    inputs: DeleteProducerAgentAdminInputs
  ): Promise<ProducerAgent> {
    const { producerAgentId } = inputs;

    const producerAgent = await this.producerAgentRepo.findOne({
      where: {
        id: producerAgentId,
      },
    });

    if (!producerAgent) {
      throw new CustomError(PRODUCER_AGENT_NOT_FOUND);
    }
    // todo > adding some login before removing

    /* --------------------------------- saving --------------------------------- */
    return await producerAgent.softRemove();
  }

  async updateProducerAgentActivation(
    inputs: UpdateProducerAgentActivationAdminInputs
  ): Promise<ProducerAgent> {
    const { isActive, producerAgentId } = inputs;

    const producerAgent = await this.producerAgentRepo.findOne({
      where: {
        id: producerAgentId,
      },
    });

    if (!producerAgent) {
      throw new CustomError(PRODUCER_AGENT_NOT_FOUND);
    }

    producerAgent.isActive = isActive;

    return await producerAgent.save();
  }

  async getProducerAgents(
    paginationArgs: PaginationArgs,
    args: GetProducerAgentsAdminArgs
  ) {
    const { isActive, search, producerId } = args;

    const queryBuilder =
      this.producerAgentRepo.createQueryBuilder("producerAgent");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        `(
          (LOWER(producerAgent.firstName) ilike LOWER(:search)) OR
          (LOWER(producerAgent.lastName) ilike LOWER(:search)) OR
          (LOWER(producerAgent.email) ilike LOWER(:search)) OR
          (LOWER(producerAgent.phone) ilike LOWER(:search)) OR
          (LOWER(producerAgent.description) ilike LOWER(:search))
        )`,
        {
          search: `%${search}%`,
        }
      );
    }

    if (typeof isActive !== "undefined") {
      queryBuilder.andWhere("producerAgent.isActive = :isActive", {
        isActive,
      });
    }

    if (producerId) {
      queryBuilder.andWhere("producerAgent.producerId = :producerId", {
        producerId,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("producerAgent.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getProducerAgentById(
    args: GetProducerAgentByIdAdminArgs
  ): Promise<ProducerAgent> {
    const { producerAgentId } = args;

    const producerAgent = await this.producerAgentRepo
      .createQueryBuilder("producerAgent")
      .andWhere("producerAgent.id = :producerAgentId", {
        producerAgentId,
      })
      .getOne();

    if (!producerAgentId) {
      throw new CustomError(PRODUCER_AGENT_NOT_FOUND);
    }

    return producerAgent;
  }

  /* -------------------------------------------------------------------------- */
  /*                                ResolveField                                */
  /* -------------------------------------------------------------------------- */

  async producer(producerAgentId: string): Promise<Producer> {
    const producerAgent = await this.producerAgentRepo
      .createQueryBuilder("producerAgent")
      .andWhere("producerAgent.id = :producerAgentId", {
        producerAgentId,
      })
      .leftJoinAndSelect("producerAgent.producer", "producer")
      .getOne();

    return producerAgent.producer;
  }
}
