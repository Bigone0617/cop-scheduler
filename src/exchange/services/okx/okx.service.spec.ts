import { Test, TestingModule } from '@nestjs/testing';
import { OkxService } from './okx.service';

describe('OkxService', () => {
  let service: OkxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OkxService],
    }).compile();

    service = module.get<OkxService>(OkxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
