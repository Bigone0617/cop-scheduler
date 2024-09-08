import { Test, TestingModule } from '@nestjs/testing';
import { GopaxService } from './gopax.service';

describe('GopaxService', () => {
  let service: GopaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GopaxService],
    }).compile();

    service = module.get<GopaxService>(GopaxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
