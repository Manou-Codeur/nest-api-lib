import { Body, Controller, Get, Post } from '@nestjs/common';

import { CarService } from '../services/car.service';

@Controller()
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getCars() {
    return this.carService.getCars();
  }

  @Post()
  postCar(@Body() body: any) {
    return this.carService.createCar(body);
  }
}
