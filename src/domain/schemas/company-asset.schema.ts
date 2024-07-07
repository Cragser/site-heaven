import { z, ZodType } from 'zod';
import { CompanyAssetType } from '../types/company-asset.type';
import { extendApi } from '@anatine/zod-openapi';

export const companyAssetSchema: ZodType<Omit<CompanyAssetType, 'id'>> =
  z.object({
    assetId: z.string(),
    companyId: z.string(),
  });

export const companyAssetSchemaExtended = extendApi(companyAssetSchema, {
  description: 'TODO: Add description',
  title: ' CompanyAsset Schema',
});
