import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Autoriser uniquement les requêtes venant du frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Méthodes HTTP autorisées
    credentials: true, // Permet les cookies si nécessaires
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
