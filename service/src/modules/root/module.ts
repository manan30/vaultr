import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/module';
import { CategoryModule } from '../category/module';
import { RecurringModule } from '../recurring/module';
import { UserModule } from '../user/module';
import { RootController } from './controller';
import { RootService } from './service';

@Module({
  imports: [UserModule, AuthModule, CategoryModule, RecurringModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
