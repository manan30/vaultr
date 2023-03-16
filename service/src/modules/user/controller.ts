import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  createUser(@Body() body: any) {
    return this.userService.createUser(body);
  }

  @Get('')
  getHello() {
    return this.userService.getUsers();
  }
}
