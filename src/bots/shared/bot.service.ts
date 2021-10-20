import { Injectable } from '@nestjs/common';
import { BotsParams } from './BotParams';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BotService {
  constructor(
    @InjectModel('Bot') private readonly botModel: Model<BotsParams>,
  ) {}

  async getAll() {
    return await this.botModel.find().exec();
  }

  async getById(id: string) {
    return await this.botModel.findById(id).exec();
  }

  async create(bot: BotsParams) {
    const createdbot = new this.botModel(bot);
    return await createdbot.save();
  }

  async update(id: string, bot: BotsParams) {
    await this.botModel.updateOne({ _id: id }, bot).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.botModel.deleteOne({ _id: id }).exec();
  }
}
