import { Controller, Get, Query } from '@nestjs/common';
import { BinanceService } from './services/binance/binance.service';
import { CoinbaseService } from './services/coinbase/coinbase.service';
import { UpbitService } from './services/upbit/upbit.service';
import { BithumbService } from './services/bithumb/bithumb.service';
import { CoinoneService } from './services/coinone/coinone.service';
import { KorbitService } from './services/korbit/korbit.service';
import { GopaxService } from './services/gopax/gopax.service';
import { OkxService } from './services/okx/okx.service';
import { BybitService } from './services/bybit/bybit.service';
import { Cron } from '@nestjs/schedule';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
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
    private readonly exchangeService: ExchangeService,
  ) {}

  @Cron('*/5 * * * * *')
  handleCron() {
    return this.exchangeService.getMarketCapTop10Price();
  }

  @Get('binance')
  async getBinancePrices(@Query('symbols') symbols: string) {
    const symbolsArray = symbols.split(',');
    return this.binanceService.getPrices(symbolsArray);
  }

  @Get('coinbase')
  async getCoinbasePrice(@Query('symbol') symbol: string) {
    return this.coinbaseService.getPrice(symbol);
  }

  @Get('upbit')
  async getUpbitPrices(@Query('symbols') symbols: string) {
    const symbolsArray = symbols.split(',');
    return this.upbitService.getPrices(symbolsArray);
  }

  @Get('bithumb')
  async getBithumbPrice(@Query('symbol') symbol: string) {
    return this.bithumbService.getPrice(symbol);
  }

  @Get('coinone')
  async getCoinonePrice(@Query('symbol') symbol: string) {
    return this.coinoneService.getPrice(symbol);
  }

  @Get('korbit')
  async getKorbitPrice(@Query('symbol') symbol: string) {
    return this.korbitService.getPrice(symbol);
  }

  @Get('gopax')
  async getGopaxPrice(@Query('symbol') symbol: string) {
    return this.gopaxService.getPrice(symbol);
  }

  @Get('okx')
  async getOkxPrice(@Query('symbol') symbol: string) {
    return this.okxService.getPrice(symbol);
  }

  @Get('bybit')
  async getBybitPrice(@Query('symbol') symbol: string) {
    return this.bybitService.getPrice(symbol);
  }
}
