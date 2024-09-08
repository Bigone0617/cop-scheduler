import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly exchangeUrls = {
    binance: 'https://api.binance.com/api/v3',
    upbit: 'https://api.upbit.com/v1',
    bithumb: 'https://api.bithumb.com/public',
    coinone: 'https://api.coinone.co.kr',
    korbit: 'https://api.korbit.co.kr/v1',
    gopax: 'https://api.gopax.co.kr/trading-pairs',
    coinbase: 'https://api.coinbase.com/v2',
    okx: 'https://www.okx.com',
    bybit: 'https://api.bybit.com',
  };

  getExchangeUrl(exchange: string): string {
    return this.exchangeUrls[exchange] || null;
  }
}
