import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getUsers() {
    return this.appService.fetchUsers();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
