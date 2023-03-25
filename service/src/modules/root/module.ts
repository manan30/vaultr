import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/module';
import { UserModule } from '../user/module';
import { RootController } from './controller';
import { RootService } from './service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
