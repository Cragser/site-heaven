import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';
import { AssetValueHistoryType } from '../types/asset-value-history.type';

export const assetValueHistorySchema: ZodType<
  Omit<AssetValueHistoryType, 'id'>
> = z.object({
  asssetId: z.string(),

  date: z.string(),

  id: z.string(),

  type: z.string(),

  value: z.string(),
});

export const assetValueHistorySchemaExtended = extendApi(
  assetValueHistorySchema,
  {
    description: 'TODO: Add description',
    title: ' ValueHistory Schema',
  }
);

export const assetValueHistoryAntdValidation: Record<
  keyof Omit<AssetValueHistoryType, 'id'>,
  Rule[]
> = {
  asssetId: [{ required: true }],

  date: [{ required: true }],

  id: [{ required: true }],

  type: [{ required: true }],

  value: [{ required: true }],
};
