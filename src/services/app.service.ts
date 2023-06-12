import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async fetchUsers() {
    return this.prisma.user.findMany();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
