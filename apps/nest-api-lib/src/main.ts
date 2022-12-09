import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //setting a global prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  //swagger config
  const config = new DocumentBuilder()
    .setTitle('Nest Api')
    .setDescription('The Nest API description')
    .setVersion('1.0')
    .addTag('cars')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //start the server
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
