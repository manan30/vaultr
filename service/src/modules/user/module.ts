import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma';
import { UserController } from './controller';
import { UserService } from './service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
