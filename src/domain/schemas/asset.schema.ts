import { z, ZodType } from 'zod';
import { AssetType } from '../types/asset.type';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';

export const assetSchema: ZodType<Omit<AssetType, 'id'>> = z.object({
  id: z.string(),

  name: z.string(),

  description: z.string(),

  date: z.string(),

  type: z.string(),
});

export const assetSchemaExtended = extendApi(assetSchema, {
  description: 'TODO: Add description',
  title: ' Asset Schema',
});

export const assetAntdValidation: Record<keyof Omit<AssetType, 'id'>, Rule[]> =
  {
    id: [{ required: true }],

    name: [{ required: true }],

    description: [{ required: true }],

    date: [{ required: true }],

    type: [{ required: true }],
  };
