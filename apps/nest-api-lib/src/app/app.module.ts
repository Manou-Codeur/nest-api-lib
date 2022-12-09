import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarController } from './controllers/car.controller';
import { CarService } from './services/car.service';
import { Car, CarSchema } from './models/car.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
    MongooseModule.forRoot(
      'mongodb+srv://salim_user:k0552845499@cluster0.wahpadn.mongodb.net/carsDB'
    ),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class AppModule {}
