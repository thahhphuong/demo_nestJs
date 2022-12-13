import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Header, Res, HttpException, HttpStatus } from '@nestjs/common';
import { DogSchema } from 'src/dog/schemas/dog.schema';
import { DogsService } from 'src/service/dog.service';
import { DogDTO } from '../dto/dog.dto';
import { Request, Response } from 'express';
import { Roles } from 'src/roles.decorator';

@Controller('tests')
export class DogController {
  constructor(private dogService: DogsService) { }
  @Post()
  // @Roles(Admin)
  async create(@Body() createDogDto: DogDTO, @Res() res: Response) {
    const test1 = await this.dogService.createNew(createDogDto)
    console.log({ test1 })
    // throw new HttpException('Forbidden', HttpStatus.OK);
    return res.status(HttpStatus.OK).json(test1)
  }

  @Get()
  @Header('Content-Type', 'application/json.')
  findAll(@Query() { search, limit }) {
    console.log({ search, limit })
    return 'This action returns all cats ++ findAll';
  }

  // getInfo(@Req() req): string {
  //   console.log(req.body)
  //   return 'This action single cat with body';
  // }
  /* update */
  @Put(':id')
  updateInfo(@Param('id') id: string) {
    return `update info success`
  }

  /* DELETE */
  @Delete('delete')
  remove() {
    return `This action removes a  cat`;
  }
}
