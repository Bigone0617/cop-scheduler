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

  private readonly marketCapTop10 = {
    binance: [
      'BTCUSDT', // 비트코인
      'ETHUSDT', // 이더리움
      'USDTDAI', // 테더
      'BNBUSDT', // 바이낸스 코인
      'SOLUSDT', // 솔라나
      'USDCUSDT', // USD 코인
      'XRPUSDT', // 리플
      'DOGEUSDT', // 도지코인
      'TONUSDT', // 톤코인
      'ADAUSDT', // 카르다노
    ],
  };

  getExchangeUrl(exchange: string): string {
    return this.exchangeUrls[exchange] || null;
  }

  getMarketCapTop10Symbols(exchange: string): string[] {
    return this.marketCapTop10[exchange] || null;
  }
}
