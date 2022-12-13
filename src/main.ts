import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const port = 4000
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  console.log("app listen on port: " + `${port}`)
  await app.listen(port);
}
bootstrap();
