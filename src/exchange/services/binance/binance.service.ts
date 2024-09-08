import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class BinanceService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('binance');
  }

  async getPrices(symbols: string[]): Promise<any> {
    const url = `${this.baseUrl}/ticker/price`;
    const params = { symbols: JSON.stringify(symbols) };
    const response = await this.httpService.get(url, params);
    return response.data;
  }

  async get24HPrice(): Promise<any> {
    const url = `${this.baseUrl}/24hr`;
    const response = await this.httpService.get(url);
    return response.data;
  }
}
