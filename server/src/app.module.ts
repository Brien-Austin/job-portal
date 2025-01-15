import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : '.env'
    })
  ],
  controllers: [AppController, JobController],
  providers: [AppService, PrismaService, JobService],
  exports : [PrismaService]
})
export class AppModule {}
