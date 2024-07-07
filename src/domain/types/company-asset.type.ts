import { BaseRecord } from '@refinedev/core';

export interface CompanyAssetType extends BaseRecord {
  assetId: string;
  companyId: string;
}
