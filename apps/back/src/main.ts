import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { setupApp } from "./setup-app";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    credentials: true,
    origin: [process.env.NX_ADMIN_URL],
  });

  setupApp(app);

  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.NX_BACK_PORT;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphql`);
}

bootstrap();
