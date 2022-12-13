import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsService } from 'src/service/dog.service';
import { DogController } from '../controller/pTest.controller';
import { Dog, DogSchema } from 'src/dog/schemas/dog.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
    controllers: [DogController],
    providers: [DogsService],
})
export class DogsModule { }
