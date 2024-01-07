import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { TodoStatus } from '@/todos/entities/todos.model'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  @ApiProperty()
  status: TodoStatus
}
