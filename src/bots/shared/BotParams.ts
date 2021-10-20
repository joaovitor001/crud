import { Document } from 'mongoose';

export class BotsParams extends Document {
  limit?: number;
  offset?: number;
  account_id?: number;
  scope?: 'enabled' | 'disabled';
  strategy?: 'long' | 'short';
  sort_by?: 'profit' | 'created_at' | 'updated_at';
  sort_direction?: 'asc' | 'desc';
  quote?: string;
}
