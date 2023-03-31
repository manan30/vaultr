import {
  Body,
  Controller,
  Post,
  Session,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthGuard } from 'src/common/guards/auth';
import { Session as SessionType } from 'src/types/session';

import { CreateRecurringDto } from './dto/create-recurring';
import { RecurringService } from './service';

@Controller('recurring')
@UseGuards(AuthGuard)
export class RecurringController {
  constructor(private readonly recurringService: RecurringService) {}

  @Post('/new')
  async createRecurring(
    @Body(new ValidationPipe()) body: CreateRecurringDto,
    @Session() session: SessionType,
  ) {
    const { user } = session;

    return this.recurringService.create(body, user);
  }
}
