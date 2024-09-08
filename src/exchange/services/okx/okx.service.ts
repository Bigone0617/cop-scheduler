import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from '../../../config/config.service';

@Injectable()
export class OkxService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('okx');
  }

  async getPrice(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/api/v5/market/ticker`;
    const params = { instId: symbol };
    const response = await this.httpService.get(url, params);
    return response.data;
  }
}
