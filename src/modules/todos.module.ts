import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TodosController } from '@/controllers/todos.controller'
import { TodosModel } from '@/models/todos.model'
import { TodosService } from '@/services/todos.service'

@Module({
  imports: [TypeOrmModule.forFeature([TodosModel])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
