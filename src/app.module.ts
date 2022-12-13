import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './module/dog.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), DogsModule],
})

export class AppModule { }
