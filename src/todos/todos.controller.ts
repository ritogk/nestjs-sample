import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TodosService } from '@/todos/todos.service'
import { TodosModel } from '@/todos/entities/todos.entity'

import { CreateTodoInput } from '@/todos/dto/create-todo.input'
import { UpdateTodoInput } from '@/todos/dto/update-todo.input'
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm'

@Controller('todo')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async readAllTodos(): Promise<TodosModel[]> {
    const result = await this.todosService.readAllTodos()
    return result
  }

  @Post()
  async createTodo(@Body() input: CreateTodoInput): Promise<InsertResult> {
    return this.todosService.createTodo(input)
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
