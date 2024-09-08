import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from '../../../config/config.service';

@Injectable()
export class BybitService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('bybit');
  }

  async getPrice(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/v5/market/tickers`;
    const params = { symbol, category: 'inverse' };
    const response = await this.httpService.get(url, params);
    return response.data;
  }
}
