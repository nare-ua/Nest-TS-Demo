import { Injectable } from '@nestjs/common';
import { PassthruDTO } from './dto/openai-backend.dto';
import { Passthru } from './interface/openai-backend.interface';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenaiBackendService {
    constructor(

    ) {}

    private configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    private openai = new OpenAIApi(this.configuration);
    private engine = 'text-davinci-002';

    async openPassthru(passthru: PassthruDTO): Promise<Passthru> {
        
        // let text = "Correct this to standard English:\n\nTarget sentence: I no speak English.\n\nStandard English:\n";
        console.log(`passthru params: `,JSON.stringify(passthru.params))
        const res = await this.openai.createCompletion(
            this.engine,
            {
                prompt: passthru.params['prompt'],
                temperature: passthru.params['temperature'],
                max_tokens: passthru.params['max_tokens'],
                top_p: passthru.params['top_p'],
                frequency_penalty: passthru.params['frequency_penalty'],
                presence_penalty: passthru.params['presence_penalty'],
            }
        );//res End
/*
테스트용 swagger - try에서 사용
{
"params": {
"prompt": "Correct this to standard English:\n\nTarget sentence: I no speak English.\n\nStandard English:\n",
"temperature": 0,
"max_tokens": 60,
"top_p": 1.0,
"frequency_penalty": 0.0,
"presence_penalty": 0.0
}
}
*/
        return {data: res.data};
    }
}
