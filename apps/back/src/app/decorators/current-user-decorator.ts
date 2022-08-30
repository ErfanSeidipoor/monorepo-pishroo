import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Request } from "express";

export const UserId = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;
    return (request.user && request.user.id) || undefined;
  }
);
