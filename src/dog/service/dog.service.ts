import { Model } from 'mongoose';
import { Injectable, Query, Param, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from '../schemas/dog.schema';
import { DogDTO } from 'src/dog/dto/dog.dto';

@Injectable()
export class DogsService {
    constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) { }

    async createNew(newDog: DogDTO): Promise<Dog> {
        const createdDog = new this.dogModel(newDog);
        return createdDog.save();
    }

    async findAll(conditions: Object, skip: number): Promise<Dog[]> {
        return this.dogModel.find(conditions).skip(skip).sort({ createdAt: -1 })
    }

    async updateInfo(id: string, body: Object): Promise<Dog> {
        const data = await this.dogModel.findOneAndUpdate({ _id: id }, { $set: { body } }, { new: true, upsert: true })
        return data
    }

    async getInfo(id: string): Promise<Dog[]> {
        return await this.dogModel.findOne({ _id: id })
    }
}
