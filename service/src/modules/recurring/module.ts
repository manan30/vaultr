import { Module } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma';

import { CategoryModule } from '../category/module';
import { CategoryService } from '../category/service';
import { RecurringController } from './controller';
import { RecurringService } from './service';

@Module({
  providers: [PrismaService, RecurringService, CategoryService],
  controllers: [RecurringController],
  imports: [CategoryModule],
})
export class RecurringModule {}
