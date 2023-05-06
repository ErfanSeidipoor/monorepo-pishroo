import { paginate } from "@back/helpers/paginate";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  CreateCallAdminInputs,
  DeleteCallAdminInputs,
  GetCallByIdAdminArgs,
  GetCallsAdminArgs,
  InsertDailyCallsAdminInputs,
  PaginationArgs,
  UpdateCallAdminInputs,
} from "@pishroo/dto";
import {
  Call,
  Category,
  Customer,
  Producer,
  ProducerAgent,
  Transporter,
  TransporterAgent,
  User,
} from "@pishroo/entities";
import { CallTypeEnum } from "@pishroo/enums";
import {
  CALL_NOT_FOUND,
  CATEGORY_NOT_FOUND,
  CustomError,
} from "@pishroo/http-exceptions";
import * as utils from "@pishroo/utils";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CallService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Call) private callRepo: Repository<Call>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(Transporter)
    private transporterRepo: Repository<Transporter>,
    @InjectRepository(TransporterAgent)
    private transporterAgentRepo: Repository<TransporterAgent>,
    @InjectRepository(Producer)
    private producerRepo: Repository<Producer>,
    @InjectRepository(ProducerAgent)
    private producerAgentRepo: Repository<ProducerAgent>,
    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>
  ) {}

  async insertDailyCalls(
    userId: string,
    inputs: InsertDailyCallsAdminInputs
  ): Promise<Call[]> {
    const { calls } = inputs;

    const newCalls: Call[] = [];

    for (const { newPhone, timestamp } of calls) {
      const call = await this.callRepo.findOne({
        where: {
          userId,
          timestamp,
          newPhone,
        },
      });

      if (call) continue;

      const transporter = await this.isTransporter(newPhone);
      const producer = await this.isProducer(newPhone);
      const customer = await this.isCustomer(newPhone);

      let type: CallTypeEnum = CallTypeEnum.unknow;
      if (transporter) {
        type = CallTypeEnum.transporter;
      } else if (producer) {
        type = CallTypeEnum.producer;
      } else if (customer) {
        type = CallTypeEnum.customer;
      }

      /* -------------------------------- creating -------------------------------- */

      newCalls.push(
        this.callRepo.create({
          newPhone,
          timestamp,
          transporterId: transporter ? transporter.id : null,
          producerId: producer ? producer.id : null,
          customerId: customer ? customer.id : null,
          type,
          userId,
        })
      );
    }

    return await this.callRepo.save(newCalls);
  }

  async createCall(
    userId: string,
    inputs: CreateCallAdminInputs
  ): Promise<Call> {
    const { description, newPhone } = inputs;

    const transporter = await this.isTransporter(newPhone);
    const producer = await this.isProducer(newPhone);
    const customer = await this.isCustomer(newPhone);

    let type: CallTypeEnum = CallTypeEnum.unknow;
    if (transporter) {
      type = CallTypeEnum.transporter;
    } else if (producer) {
      type = CallTypeEnum.producer;
    } else if (customer) {
      type = CallTypeEnum.customer;
    }

    /* -------------------------------- creating -------------------------------- */

    const call = this.callRepo.create({
      description,
      newPhone,
      transporterId: transporter ? transporter.id : null,
      producerId: producer ? producer.id : null,
      customerId: customer ? customer.id : null,
      type,
      userId,
    });

    /* --------------------------------- output --------------------------------- */

    return await call.save();
  }

  async updateCall(inputs: UpdateCallAdminInputs): Promise<Call> {
    const { callId, description, newPhone } = inputs;

    const call = await this.callRepo.findOne({
      where: {
        id: callId,
      },
    });

    if (!call) {
      throw new CustomError(CATEGORY_NOT_FOUND);
    }

    /* -------------------------------- updating -------------------------------- */

    utils.object.assignProps(call, {
      description,
      newPhone,
    });

    /* --------------------------------- output --------------------------------- */

    return await call.save();
  }

  async deleteCall(inputs: DeleteCallAdminInputs): Promise<Call> {
    const { callId } = inputs;

    const call = await this.callRepo.findOne({
      where: {
        id: callId,
      },
    });

    if (!call) {
      throw new CustomError(CALL_NOT_FOUND);
    }

    call.remove();

    return call;
  }

  async getCalls(paginationArgs: PaginationArgs, args: GetCallsAdminArgs) {
    const { search, userId } = args;

    const queryBuilder = this.callRepo.createQueryBuilder("call");

    /* --------------------------------- filters -------------------------------- */

    if (search) {
      queryBuilder.andWhere(
        "( (call.description ilike :search) OR (call.newPhone ilike :search) )",
        {
          search: `%${search}%`,
        }
      );
    }

    if (userId) {
      queryBuilder.andWhere("call.userId = :userId", {
        userId,
      });
    }

    /* ---------------------------------- Order --------------------------------- */

    queryBuilder.addOrderBy("call.createdAt", "DESC");

    return paginate(queryBuilder, paginationArgs);
  }

  async getCallById(args: GetCallByIdAdminArgs): Promise<Call> {
    const { callId } = args;

    const call = await this.callRepo
      .createQueryBuilder("call")
      .andWhere("call.id = :callId", {
        callId,
      })
      .getOne();

    if (!call) {
      throw new CustomError(CATEGORY_NOT_FOUND);
    }

    return call;
  }

  async isCustomer(phone: string): Promise<Customer | null> {
    if (phone.length < 10) return null;

    const customer = await this.customerRepo
      .createQueryBuilder("customer")
      .andWhere("customer.phone ilike :phone", {
        phone: `%${phone.slice(phone.length - 10)}%`,
      })
      .getOne();

    return customer;
  }

  async isTransporter(phone: string): Promise<Transporter | null> {
    if (phone.length < 10) return null;

    let transporter = await this.transporterRepo
      .createQueryBuilder("transporter")
      .andWhere("transporter.phone ilike :phone", {
        phone: `%${phone.slice(phone.length - 10)}%`,
      })
      .getOne();

    if (!transporter) {
      const transporterAgent = await this.transporterAgentRepo
        .createQueryBuilder("transporterAgent")
        .leftJoinAndSelect("transporterAgent.transporter", "transporter")
        .andWhere("transporterAgent.phone ilike :phone", {
          phone: `%${phone.slice(phone.length - 10)}%`,
        })
        .getOne();

      if (transporterAgent) {
        transporter = transporterAgent.transporter;
      }
    }

    return transporter;
  }

  async isProducer(phone: string): Promise<Producer | null> {
    if (phone.length < 10) return null;

    let producer = await this.producerRepo
      .createQueryBuilder("producer")
      .andWhere("producer.phone ilike :phone", {
        phone: `%${phone.slice(phone.length - 10)}%`,
      })
      .getOne();

    if (!producer) {
      const producerAgent = await this.producerAgentRepo
        .createQueryBuilder("producerAgent")
        .leftJoinAndSelect("producerAgent.producer", "producer")
        .andWhere("producerAgent.phone ilike :phone", {
          phone: `%${phone.slice(phone.length - 10)}%`,
        })
        .getOne();

      if (producerAgent) {
        producer = producerAgent.producer;
      }
    }

    return producer;
  }

  // /* -------------------------------------------------------------------------- */
  // /*                                ResolveField                                */
  // /* -------------------------------------------------------------------------- */

  async transporter(callId: string): Promise<Transporter> {
    const call = await this.callRepo.findOne({
      where: {
        id: callId,
      },
      relations: ["transporter"],
    });
    return call.transporter;
  }

  async customer(callId: string): Promise<Customer> {
    const call = await this.callRepo.findOne({
      where: {
        id: callId,
      },
      relations: ["customer"],
    });
    return call.customer;
  }

  async producer(callId: string): Promise<Producer> {
    const call = await this.callRepo.findOne({
      where: {
        id: callId,
      },
      relations: ["producer"],
    });
    return call.producer;
  }

  async user(callId: string): Promise<User> {
    const call = await this.callRepo.findOne({
      where: {
        id: callId,
      },
      relations: ["user"],
    });
    return call.user;
  }
}
