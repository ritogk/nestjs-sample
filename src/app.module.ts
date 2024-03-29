import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { CatsModule } from './core/cats/cats.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodosModule } from '@/core/todos/todos.module'
import { FileModule } from '@/core/file/file.module'
import { DATABASE_CONFIG } from '@/config/database.config'

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: DATABASE_CONFIG.DB_CONNECTION,
      host: DATABASE_CONFIG.DB_HOST,
      port: DATABASE_CONFIG.DB_PORT,
      database: DATABASE_CONFIG.DB_DATABASE,
      username: DATABASE_CONFIG.DB_USERNAME,
      password: DATABASE_CONFIG.DB_PASSWORD,
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    TodosModule,
    FileModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
