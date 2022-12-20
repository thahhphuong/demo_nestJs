import { Model } from "mongoose";
import { Injectable, Query, Param, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from '../auth/auth.schema'

@Injectable()

export class AuthsService {
    constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) { }

    async create(data): Promise<Auth> {
        const newData=  new this.authModel(data)
        return newData.save()
    }
}