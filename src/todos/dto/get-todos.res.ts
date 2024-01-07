import { TodoStatus } from '@/models/todos.model'
import { ApiProperty } from '@nestjs/swagger'

class Todo {
  @ApiProperty({ example: 'abcdefg', description: 'ID' })
  id: string

  @ApiProperty({ example: 'title', description: 'title' })
  title: string

  @ApiProperty({ example: 'status', description: 'status' })
  status: TodoStatus
}

export class GetTodosRes {
  @ApiProperty({ type: [Todo], description: 'List of TODO items' })
  todos: Todo[]
}
