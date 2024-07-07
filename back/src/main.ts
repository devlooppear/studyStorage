import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const localPort = process.env.LOCAL_PORT || 3000
  app.setGlobalPrefix('api');

  await app.listen(localPort);
}
bootstrap();
