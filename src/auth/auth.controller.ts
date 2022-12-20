import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req, Header, Res, HttpStatus } from '@nestjs/common';
import { AuthSchema } from './auth.schema';
import { AuthsService } from './auth.service';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';


@Controller('auths')

export class AuthController {
    constructor(private authService: AuthsService) { }
    @Get()
    getList() {
        return `hello`
    }

    @Post()
    async create(@Body() body, @Res() res: Response) {
        console.log(body)
        const password = body.password
        body.password = await bcrypt.hash(password, 10)
        const data = await this.authService.create(body)
        return res.status(HttpStatus.OK).json(data)
    }
}