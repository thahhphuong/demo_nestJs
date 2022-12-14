import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Header, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { DogSchema } from 'src/dog/schemas/dog.schema';
import { DogsService } from 'src/dog/service/dog.service';
import { DogDTO } from '../dto/dog.dto';
import { Request, Response } from 'express';
import { RolesGuard } from 'src/auth.guard';
import { Roles } from 'src/role/roles.decorator';
import { Role } from 'src/role/role.enum';



@Controller('tests')
// @UseGuards(RolesGuard)
export class DogController {
  constructor(private dogService: DogsService) { }
  @Post()
  // @Roles('admin')
  async create(@Body() createDogDto: DogDTO, @Res() res: Response) {
    const test1 = await this.dogService.createNew(createDogDto)
    console.log({ test1 })
    // throw new HttpException('Forbidden', HttpStatus.OK);
    return res.status(HttpStatus.OK).json(test1)
  }

  @Get()
  @Header('Content-Type', 'application/json.')
  // @Roles(Role.User)
  async getALl(@Query() { skip, limit }, @Query() search: string, @Res() res: Response) {
    let conditions = {}

    if (Object.values(search).length > 0) {
      conditions['$text'] = { $search: search }
    }
    const responseData = await this.dogService.findAll(conditions, skip)
    return res.status(HttpStatus.OK).json(responseData)
  }

  @Get(':id')
  async getInfo(@Param('id') id: string, @Res() res: Response) {
    const responseData = await this.dogService.getInfo(id)
    return res.status(HttpStatus.OK).json(responseData)
  }

  /* update */
  @Put(':id')
  async updateInfo(@Param('id') id: string, @Body() body: DogDTO, @Res() res: Response) {
    
    const updateInfo = await this.dogService.updateInfo(id, body)
    return res.status(HttpStatus.OK).json(updateInfo)
  }

  /* DELETE */
  @Delete('delete')
  remove() {
    return `This action removes a  cat`;
  }
}
