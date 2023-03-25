import { Module } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma';

@Module({
  providers: [PrismaService],
})
export class RecurringModule {}
