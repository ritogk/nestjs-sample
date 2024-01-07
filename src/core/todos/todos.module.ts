import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TodosController } from '@/core/todos/todos.controller'
import { TodosModel } from '@/models/todos.model'
import { TodosService } from '@/core/todos/todos.service'

@Module({
  imports: [TypeOrmModule.forFeature([TodosModel])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
