import { User } from '@pishroo/entities';
import { Request, Response } from 'express';

export type Ctx = {
  req: Request & { user?: User };
  res: Response;
};
