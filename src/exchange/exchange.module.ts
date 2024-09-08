import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange.controller';
import { HttpModule } from '../http/http.module';
import { BinanceService } from './services/binance/binance.service';
import { CoinbaseService } from './services/coinbase/coinbase.service';
import { UpbitService } from './services/upbit/upbit.service';
import { BithumbService } from './services/bithumb/bithumb.service';
import { CoinoneService } from './services/coinone/coinone.service';
import { KorbitService } from './services/korbit/korbit.service';
import { GopaxService } from './services/gopax/gopax.service';
import { ConfigModule } from 'src/config/config.module';
import { OkxService } from './services/okx/okx.service';
import { BybitService } from './services/bybit/bybit.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule, ConfigModule],
  providers: [
    BinanceService,
    CoinbaseService,
    UpbitService,
    BithumbService,
    CoinoneService,
    KorbitService,
    GopaxService,
    ConfigModule,
    OkxService,
    BybitService,
    ExchangeService,
  ],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
