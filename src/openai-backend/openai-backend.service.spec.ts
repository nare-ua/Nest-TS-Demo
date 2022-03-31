import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiBackendService } from './openai-backend.service';

describe('OpenaiBackendService', () => {
  let service: OpenaiBackendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenaiBackendService],
    }).compile();

    service = module.get<OpenaiBackendService>(OpenaiBackendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
