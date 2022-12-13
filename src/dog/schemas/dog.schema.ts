import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DogDocument = HydratedDocument<Dog>;
@Schema()
export class Dog {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop()
    tags: string[];
}

export const DogSchema = SchemaFactory.createForClass(Dog);