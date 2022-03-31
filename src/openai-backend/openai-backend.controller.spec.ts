import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiBackendController } from './openai-backend.controller';

describe('OpenaiBackendController', () => {
  let controller: OpenaiBackendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiBackendController],
    }).compile();

    controller = module.get<OpenaiBackendController>(OpenaiBackendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
