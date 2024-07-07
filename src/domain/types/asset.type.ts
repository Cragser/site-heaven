import { BaseRecord } from '@refinedev/core';

export interface AssetType extends BaseRecord {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: string;
}
