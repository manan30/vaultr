import { Module } from '@nestjs/common';
import { UserModule } from '../user/module';
import { RootController } from './controller';
import { RootService } from './service';

@Module({
  imports: [UserModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
