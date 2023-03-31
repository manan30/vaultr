import { BadRequestException, Injectable } from '@nestjs/common';

import { Category, Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/services/prisma';
import { Session } from 'src/types/session';

import { CategoryService } from '../category/service';
import { OTHER_CATEGORY } from '../category/utils/constants';
import { CreateRecurringDto } from './dto/create-recurring';

@Injectable()
export class RecurringService {
  recurring: Prisma.RecurringDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryService: CategoryService,
  ) {
    this.recurring = this.prismaService.recurring;
  }

  async create(data: CreateRecurringDto, user: Session['user']) {
    let _category: Category | null | undefined = null;
    const { name, amount, frequency, category, otherCategory, variableAmount } =
      data;

    if (category.trim().toLowerCase() === OTHER_CATEGORY.toLowerCase()) {
      if (!otherCategory?.trim()) {
        throw new BadRequestException('Other category name is required');
      } else {
        const existingCategory = await this.categoryService.findCategoryByName(
          otherCategory.trim(),
        );

        if (existingCategory) {
          _category = existingCategory;
        } else {
          _category = await this.categoryService.createCategory({
            name: otherCategory.trim(),
          });
        }
      }
    } else {
      _category = await this.categoryService.findCategoryByName(category);
    }

    if (!_category) {
      throw new BadRequestException('No category found');
    }

    return this.recurring.create({
      data: {
        name,
        priceHistory: { amount, date: new Date().toISOString() },
        variableAmount,
        frequency,
        userId: user.id,
        categoryId: _category.id,
      },
    });
  }
}
