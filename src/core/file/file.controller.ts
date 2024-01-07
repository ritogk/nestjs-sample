import { Res, Controller, Get } from '@nestjs/common'
import { Response } from 'express'
import { createReadStream } from 'fs'

import { join } from 'path'
@Controller('file')
export class FileController {
  @Get()
  getFile(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), 'package.json'))
    file.pipe(res)
  }
}
