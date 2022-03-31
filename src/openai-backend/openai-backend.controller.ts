import { Body, Controller, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import { PassthruDTO } from './dto/openai-backend.dto';
import { OpenaiBackendService } from './openai-backend.service';
import { Passthru } from './interface/openai-backend.interface';

@ApiBearerAuth()
@ApiTags('openai-backend')
@Controller('openai-backend')
export class OpenaiBackendController {
    constructor(private readonly openaiBackendService: OpenaiBackendService) {}

    @Post('/passthru')
    @ApiOperation({ summary: 'passthru' })
    async openaiPassthru( @Body() passthru:PassthruDTO): Promise<Passthru> {
        return await this.openaiBackendService.openPassthru(passthru);
    }
}
