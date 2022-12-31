import { INestApplication, ValidationPipe } from "@nestjs/common";
import { urlencoded, json } from "express";
import session = require("express-session");
import * as graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";

// import GraphQLUpload = require("graphql-upload");

export const setupApp = async (app: INestApplication) => {
  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  app.use(json({ limit: "50mb" }));
  app.use(urlencoded({ extended: true, limit: "50mb" }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidUnknownValues: true,
    })
  );

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
};
