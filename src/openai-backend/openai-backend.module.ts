import { Module } from '@nestjs/common';
import { OpenaiBackendController } from './openai-backend.controller';
import { OpenaiBackendService } from './openai-backend.service';

@Module({
  controllers: [OpenaiBackendController],
  providers: [OpenaiBackendService]
})
export class OpenaiBackendModule {}
