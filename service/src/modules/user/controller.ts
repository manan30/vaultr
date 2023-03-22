import {
  Body,
  Controller,
  Post,
  Res,
  Session,
  ValidationPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { Session as SessionType } from 'src/types/session';

import { CreateUserDto } from './dto/create-user';
import { UserService } from './service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async createUser(
    @Res() res: Response,
    @Body(new ValidationPipe()) body: CreateUserDto,
    @Session() session: SessionType,
  ) {
    const existingUser = await this.userService.findUserByEmail(body.email);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await this.userService.createUser(body);
    session.user = { id: newUser.id };

    return res.json({ userId: newUser.id });
  }
}
