import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloMessage(): { message: string } {
    return { message: 'Hello world!' };
  }
}
