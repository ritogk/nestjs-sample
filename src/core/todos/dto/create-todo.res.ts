import { TodoStatus } from '@/models/todos.model'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoRes {
  @ApiProperty({ example: 'abcdefg', description: 'ID' })
  id: string

  @ApiProperty({ example: 'title', description: 'title' })
  title: string

  @ApiProperty({ example: 'status', description: 'status' })
  status: TodoStatus
}
