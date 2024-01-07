import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { TodoStatus } from '@/todos/entities/todos.entity'

export class CreateTodoInput {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: TodoStatus
}
