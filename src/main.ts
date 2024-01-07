import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as path from 'path'
import { writeFileSync } from 'fs'
import { dump } from 'js-yaml'

async function bootstrap() {
  // Nestアプリインスタンスの作成
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  const outputPath = path.resolve(process.cwd(), 'openapi.yml')
  writeFileSync(outputPath, dump(document, {}))
  await app.listen(3000)
}
bootstrap()
