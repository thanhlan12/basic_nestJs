import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  fullname: string;

  @Prop()
  dateOfBirth: string;

  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
