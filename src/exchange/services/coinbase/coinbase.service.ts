import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CoinbaseService {
  private readonly baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('coinbase');
  }

  async getPrice(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/prices/${symbol}-USD/spot`;
    const response = await this.httpService.get(url);
    return response.data;
  }
}
