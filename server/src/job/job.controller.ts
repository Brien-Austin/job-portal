import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from 'src/types/job';
import { ApiBody } from '@nestjs/swagger';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('create')
  @ApiBody({type : CreateJobDto})
  async createJob(@Body()createJobDto :CreateJobDto ){
    return this.jobService.createJob(createJobDto)

  }
}
