import { Test, TestingModule } from '@nestjs/testing';
import { CoinoneService } from './coinone.service';

describe('CoinoneService', () => {
  let service: CoinoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoinoneService],
    }).compile();

    service = module.get<CoinoneService>(CoinoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
