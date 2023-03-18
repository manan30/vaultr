import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Session,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user';
import { UserService } from './service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async createUser(
    @Body(new ValidationPipe()) body: CreateUserDto,
    @Res() res: Response,
    @Session() session: Record<string, any>,
  ) {
    const existingUser = await this.userService.findUserByEmail(body.email);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await this.userService.createUser(body);
    console.log({ session, newUser });

    return res.json({ userId: newUser.id });
  }

  @Get('')
  getHello() {
    return this.userService.getUsers();
  }
}
