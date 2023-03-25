import { Controller, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/common/guards/auth';

@Controller('recurring')
@UseGuards(AuthGuard)
export class RecurringController {}
