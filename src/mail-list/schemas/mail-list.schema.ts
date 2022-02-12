import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongoSchema } from 'mongoose';
@Schema()
export class MailList {
  @Prop({ type: MongoSchema.Types.ObjectId })
  id: string;

  @Prop({ type: [String] })
  emails: string[];
}

export type MailListDocument = MailList & Document;

export const MailListSchema = SchemaFactory.createForClass(MailList);
