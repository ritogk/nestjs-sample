import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TodosService } from '@/todos/todos.service'
import { TodosModel } from '@/todos/entities/todos.model'

import { CreateTodoInput } from '@/todos/dto/create-todo.input'
import { UpdateTodoInput } from '@/todos/dto/update-todo.input'
import { CreateTodoRes } from '@/todos/dto/create-todo.res'
import { DeleteResult, UpdateResult } from 'typeorm'
import { ApiTags, ApiProduces, ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('todo')
@ApiTags('/todo')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  // @ApiProduces('application/json; charset=utf-8')
  // @ApiOperation({ summary: '全体取得API' })
  // @ApiResponse({
  //   status: 200,
  //   description: '登録済メンバー設定を複数返却',
  //   type: TodosModel,
  // })
  async readAllTodos(): Promise<TodosModel[]> {
    const result = await this.todosService.readAllTodos()
    return result
  }

  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Todo登録API' })
  @ApiResponse({
    status: 201,
    description: '登録したTodoを返却',
    type: CreateTodoRes,
  })
  async createTodo(@Body() input: CreateTodoInput): Promise<CreateTodoRes> {
    const result = await this.todosService.createTodo(input)
    return {
      id: result.id,
      title: result.title,
      status: result.status,
    }
  }

  @Put()
  async updateTodo(@Body() input: UpdateTodoInput): Promise<UpdateResult> {
    return this.todosService.updateTodo(input)
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.todosService.deleteTodo(id)
  }
}
