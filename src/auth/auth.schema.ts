import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string

    @Prop({ enum: ['admin', 'user'], default: 'user' })
    role: string

}
const AuthSchema = SchemaFactory.createForClass(Auth);
AuthSchema.index({ name: 'text', tags: 'text' })
export { AuthSchema }