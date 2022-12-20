
import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { Auth, AuthSchema } from './auth.schema';
import { AuthsService } from './auth.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }])],
    controllers: [AuthController],
    providers: [AuthsService]
})

export class AuthsModule { }