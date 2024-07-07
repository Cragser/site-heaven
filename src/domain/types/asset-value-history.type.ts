import { BaseRecord } from '@refinedev/core';

export interface AssetValueHistoryType extends BaseRecord {
  id: string;
  asssetId: string;
  value: number;
  date: string;
  type: string;
}
