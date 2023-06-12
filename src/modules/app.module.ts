import { Module } from '@nestjs/common';
import { AppController } from '../controllers';
import { AppService, PrismaService } from '../services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
