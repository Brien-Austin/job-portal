import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Job Application App API')
    .setDescription('API Documentation').setVersion('1.0').addTag('users').build()

    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('api-docs',app,document)

  await app.listen(process.env.PORT);
}
bootstrap();
