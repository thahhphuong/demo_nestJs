import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DogDocument = HydratedDocument<Dog>;

@Schema()
export class Dog {
    @Prop({ required: true, index: true })
    name: string;

    @Prop()
    age: number;

    @Prop()
    tags: string[];

    @Prop({type: Date, default: new Date()})
    createdAt: Date

}

export const DogSchema = SchemaFactory.createForClass(Dog);