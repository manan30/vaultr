import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/services/prisma';

import { CreateCategoryDto } from './dto/create-category';

@Injectable()
export class CategoryService {
  category: Prisma.CategoryDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;

  constructor(private readonly prismaService: PrismaService) {
    this.category = this.prismaService.category;
  }

  async createCategory(data: CreateCategoryDto) {
    return this.category.create({ data });
  }

  async findCategoryByName(name: string) {
    return this.category.findFirst({ where: { name } });
  }

  async getAllCategories() {
    return this.category.findMany();
  }
}
