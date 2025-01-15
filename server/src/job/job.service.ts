import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobService {
    constructor(private readonly prisma:PrismaService){}

    async createJob(data : Prisma.JobCreateInput){
        try {
            return this.prisma.job.create({
                data
            })
            
        } catch (error) {
            console.log('[JOB_CREATION_ERROR]',error)
            
        }
    }

}
