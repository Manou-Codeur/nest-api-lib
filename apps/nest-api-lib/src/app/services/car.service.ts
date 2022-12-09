import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Car, CarDocument } from '../models/car.model';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private readonly model: Model<CarDocument>
  ) {}

  getCars() {
    return this.model.find();
  }

  createCar(body: any) {
    const newCar = new this.model(body);
    return newCar.save();
  }
}
