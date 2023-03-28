import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  Res,
  Session,
  ValidationPipe,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { Session as SessionType } from 'src/types/session';

import { CreateUserDto } from './dto/create-user';
import { LoginUserDto } from './dto/login-user';
import { UserService } from './service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async createUser(
    @Body(new ValidationPipe()) body: CreateUserDto,
    @Session() session: SessionType,
    @Res() res: Response,
  ) {
    const existingUser = await this.userService.findUserByEmail(body.email);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const newUser = await this.userService.createUser(body);
    session.user = { id: newUser.id, email: newUser.email };

    return res.json({
      userId: newUser.id,
      details: {
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      },
    });
  }

  @Post('/login')
  async loginUser(
    @Body(new ValidationPipe()) body: LoginUserDto,
    @Session() session: SessionType,
    @Res() res: Response,
  ) {
    const existingUser = await this.userService.findUserByEmail(body.email);

    if (!existingUser) {
      throw new NotFoundException('User does not exist');
    }

    const passwordsMatch = await bcrypt.compare(
      body.password,
      existingUser.password,
    );

    if (!passwordsMatch) {
      throw new BadRequestException('Incorrect Password');
    }

    session.user = { id: existingUser.id, email: existingUser.email };

    console.log({ session });

    return res.json({
      userId: existingUser.id,
      details: {
        email: existingUser.email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
      },
    });
  }
}
