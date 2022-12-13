import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from '../dog/schemas/dog.schema';
import { DogDTO } from 'src/dog/dto/dog.dto';

@Injectable()
export class DogsService {
    constructor(@InjectModel(Dog.name) private catModel: Model<DogDocument>) { }

    async createNew(newDog: DogDTO): Promise<Dog> {
        const createdCat = await new this.catModel(newDog);
        return createdCat.save();
    }

    async findAll(): Promise<Dog[]> {
        return this.catModel.find().exec();
    }
}
