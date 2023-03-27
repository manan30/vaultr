import { Module } from '@nestjs/common';

import { PrismaService } from 'src/common/services/prisma';

import { CategoryController } from './controller';
import { CategoryService } from './service';

@Module({
  providers: [PrismaService, CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
