import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const options = new DocumentBuilder()
    .setTitle('NLP Demo - UA')
    .setDescription('openapi - json')
    .setVersion('0.1.0')
    .addTag('openai-backend')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const port = process.env.NODE_SERVER_PORT
  console.log(`port::: ${port}`)
  await app.listen(port);
  console.log(`Nlp Demo API is running on: ${await app.getUrl()}`);
}
bootstrap();
