import { Module } from '@nestjs/common';
import { BotsController } from './bots.controller';
import { BotService } from './shared/bot.service';

@Module({
  controllers: [BotsController],
  providers: [BotService],
})
export class BotsModule {}
