import { Controller, Get, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/common/guards/auth';

@Controller('auth')
export class AuthController {
  @Get('/is-authenticated')
  @UseGuards(AuthGuard)
  async isUserAuthenticated() {
    return true;
  }
}
