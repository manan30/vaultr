import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from 'src/common/guards/auth';

import { CreateCategoryDto } from './dto/create-category';
import { CategoryService } from './service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createCategory(@Body() body: CreateCategoryDto) {
    const existingCategory = await this.categoryService.findCategoryByName(
      body.name.toLowerCase(),
    );

    if (existingCategory)
      throw new BadRequestException('Category already exists');

    return await this.categoryService.createCategory({
      name: body.name.toLowerCase(),
    });
  }

  @Get('/all')
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }
}
