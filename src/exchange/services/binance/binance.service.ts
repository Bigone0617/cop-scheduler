import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class BinanceService {
  private readonly baseUrl: string;
  private readonly top10Symbols: string[];
  private readonly exchangeName: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.exchangeName = 'binance';
    this.baseUrl = this.configService.getExchangeUrl(this.exchangeName);
    this.top10Symbols = this.configService.getMarketCapTop10Symbols(
      this.exchangeName,
    );
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

  async getMarketCapTop10Price(): Promise<any> {
    const url = `${this.baseUrl}/ticker/price`;
    const symbols = this.top10Symbols;

    const params = { symbols: JSON.stringify(symbols) };

    const response = await this.httpService.get(url, params);
    return response.data;
  }
}
