import { Injectable } from '@nestjs/common';
import { BinanceService } from './services/binance/binance.service';
import { CoinbaseService } from './services/coinbase/coinbase.service';
import { UpbitService } from './services/upbit/upbit.service';
import { BithumbService } from './services/bithumb/bithumb.service';
import { CoinoneService } from './services/coinone/coinone.service';
import { KorbitService } from './services/korbit/korbit.service';
import { GopaxService } from './services/gopax/gopax.service';
import { OkxService } from './services/okx/okx.service';
import { BybitService } from './services/bybit/bybit.service';

@Injectable()
export class ExchangeService {
  constructor(
    private readonly binanceService: BinanceService,
    private readonly coinbaseService: CoinbaseService,
    private readonly upbitService: UpbitService,
    private readonly bithumbService: BithumbService,
    private readonly coinoneService: CoinoneService,
    private readonly korbitService: KorbitService,
    private readonly gopaxService: GopaxService,
    private readonly okxService: OkxService,
    private readonly bybitService: BybitService,
  ) {}

  async getMarketCapTop10Price(): Promise<any> {
    const binance = await this.binanceService.getMarketCapTop10Price();
    console.log(binance);
    return binance;
  }
}
