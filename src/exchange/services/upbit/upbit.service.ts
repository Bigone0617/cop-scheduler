import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class UpbitService {
  private readonly baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('upbit');
  }

  async getPrices(symbols: string[]): Promise<any[]> {
    const url = `${this.baseUrl}/ticker`;
    const markets = symbols.join(',');
    const params = { markets };
    const response = await this.httpService.get(url, params);

    return response.data;
  }
}
