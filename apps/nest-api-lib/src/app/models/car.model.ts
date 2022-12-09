import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true })
  brand!: string;

  @Prop({ required: true })
  serie!: string;

  @Prop()
  price!: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
