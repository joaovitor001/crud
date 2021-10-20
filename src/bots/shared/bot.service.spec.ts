import { Test, TestingModule } from '@nestjs/testing';
import { BotService } from './bot.service';

describe('BotService', () => {
  let provider: BotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotService],
    }).compile();

    provider = module.get<BotService>(BotService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
