import { BaseRecord } from '@refinedev/core';

export interface PersonAssetType extends BaseRecord {
  assetId: string;
  personId: string;
}
