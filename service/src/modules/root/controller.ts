import { Controller, Get } from '@nestjs/common';
import { RootService } from './service';

@Controller()
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get()
  getHello(): string {
    return this.rootService.getHello();
  }
}
