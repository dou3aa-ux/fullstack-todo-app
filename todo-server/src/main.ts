import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Loads all modules, controllers, services, database connections
  app.enableCors(); // Enable CORS
  //Without this, browser will block API requests
  await app.listen(5000);
  console.log('NestJS server running on http://localhost:5000');
}
bootstrap();