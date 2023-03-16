import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  getUsers() {
    return this.prismaService.user.findMany();
  }

  createUser(data: any) {
    return this.prismaService.user.create({ data });
  }
}
