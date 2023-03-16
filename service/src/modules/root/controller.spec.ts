import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './controller';
import { RootService } from './service';

describe('AppController', () => {
  let rootController: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService],
    }).compile();

    rootController = app.get<RootController>(RootController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rootController.getHello()).toBe('Hello World!');
    });
  });
});
