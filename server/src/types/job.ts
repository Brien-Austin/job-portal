import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ description: 'The title of the job', example: 'Software Developer' })
  jobTitle: string;

  @ApiProperty({ description: 'The description of the job', example: 'Develop and maintain web applications' })
  jobDescription: string;

  @ApiProperty({ description: 'Company of the Job', example: 'Microsoft' })
  companyName: string;

  @ApiProperty({ description: 'Job Location', example: "Chennai" })
  location: string;
}
