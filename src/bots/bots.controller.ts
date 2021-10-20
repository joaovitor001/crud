import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { BotsParams } from './shared/BotParams';
import { BotService } from './shared/bot.service';

@Controller('bots')
export class BotsController {
  constructor(private botService: BotService) {}

  @Get()
  async getAll(): Promise<BotsParams[]> {
    return this.botService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<BotsParams> {
    return this.botService.getById(id);
  }

  @Post()
  async create(@Body() bot: BotsParams): Promise<BotsParams> {
    return this.botService.create(bot);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() bot: BotsParams,
  ): Promise<BotsParams> {
    return this.botService.update(id, bot);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.botService.delete(id);
  }
}
