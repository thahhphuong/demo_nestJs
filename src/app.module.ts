import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './dog/module/dog.module';
import { AuthsModule } from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    DogsModule,
    AuthsModule],
})

export class AppModule { }
