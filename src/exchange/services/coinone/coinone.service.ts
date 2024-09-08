import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CoinoneService {
  private readonly baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('coinone');
  }

  async getPrice(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/ticker?currency=${symbol}`;
    const response = await this.httpService.get(url);
    return response.data;
  }
}
