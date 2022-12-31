import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { User } from "@pishroo/entities";

declare global {
  //   eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

declare module "express-session" {
  export interface SessionData {
    userId?: string;
    createdAt?: Date;
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { session } = req;
    if (session && session.userId) {
      try {
        const user = await this.userRepo.findOne({
          where: {
            id: session.userId || "",
          },
        });
        req.user = user;
      } catch (error) {
        req.session.userId = "";
        req.session.createdAt = undefined;
      }
    } else {
      req.session.userId = "";
      req.session.createdAt = undefined;
    }
    next();
  }
}
