import { Injectable } from '@nestjs/common';
import { HttpService as AxiosHttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private readonly axiosService: AxiosHttpService) {}

  async get(url: string, params?: any) {
    const response = this.axiosService.get(url, { params });
    return lastValueFrom(response);
  }

  async post(url: string, data: any) {
    const response = this.axiosService.post(url, data);
    return lastValueFrom(response);
  }
}
