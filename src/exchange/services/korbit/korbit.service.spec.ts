import { Test, TestingModule } from '@nestjs/testing';
import { KorbitService } from './korbit.service';

describe('KorbitService', () => {
  let service: KorbitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KorbitService],
    }).compile();

    service = module.get<KorbitService>(KorbitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
