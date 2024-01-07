import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { TodoStatus } from '@/models/todos.model'

export class UpdateTodoInput {
  @IsString()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsOptional()
  title?: string

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus
}
