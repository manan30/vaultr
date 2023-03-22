import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma';

import { CreateUserDto } from './dto/create-user';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  getUsers() {
    return this.prismaService.user.findMany();
  }

  createUser(data: CreateUserDto) {
    return this.prismaService.user.create({ data });
  }

  findUserByEmail(email: string) {
    return this.prismaService.user.findFirst({ where: { email } });
  }
}
