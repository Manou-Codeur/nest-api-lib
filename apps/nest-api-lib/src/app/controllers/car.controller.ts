import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { Request } from 'express';

import { CarService } from '../services/car.service';

@ApiTags('cars')
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getCars(@Req() request: Request) {
    Logger.log(`
      The cars controller has received a GET request, 
      Here's the request url ${request.url}
      `);

    return this.carService.getCars();
  }

  @Post()
  postCar(@Body() body: any) {
    return this.carService.createCar(body);
  }
}
