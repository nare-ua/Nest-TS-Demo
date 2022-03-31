import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ormConfig } from './orm.config';
import { OpenaiBackendModule } from './openai-backend/openai-backend.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    AuthModule,
    OpenaiBackendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
