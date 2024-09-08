import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { HttpModule } from './http/http.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ExchangeModule, HttpModule, ConfigModule],
})
export class AppModule {}
