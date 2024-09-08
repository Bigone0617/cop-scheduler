import { Injectable } from '@nestjs/common';
import { HttpService } from '../../../http/http.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class BithumbService {
  private readonly baseUrl: string;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.getExchangeUrl('bithumb');
  }

  async getPrice(symbol: string): Promise<any> {
    const url = `${this.baseUrl}/ticker/${symbol}`;
    const response = await this.httpService.get(url);
    return response.data.data;
  }
}
