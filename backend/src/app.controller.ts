import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api') // Ajoute un préfixe "api" à tous les endpoints dans ce contrôleur
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // Endpoint accessible via GET http://localhost:3001/api
    return this.appService.getHello();
  }

  @Get('test') // Ajoute un nouveau endpoint accessible via GET http://localhost:3001/api/test
  getTest(): { message: string } {
    return { message: 'Hello from /api/test!' };
  }
  @Get('messages')
  getMessages(): { messages: string[] } {
    return { messages: ['Message 1', 'Message 2', 'Message 3'] };
  }
}
