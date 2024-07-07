import { z, ZodType } from 'zod';
import { LegalType } from '../types/legal.type';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';

export const legalSchema: ZodType<Omit<LegalType, 'id'>> = z.object({
  id: z.string(),

  name: z.string(),

  comments: z.string(),
});

export const legalSchemaExtended = extendApi(legalSchema, {
  description: 'TODO: Add description',
  title: ' Legal Schema',
});

export const legalAntdValidation: Record<keyof Omit<LegalType, 'id'>, Rule[]> =
  {
    id: [{ required: true }],

    name: [{ required: true }],

    comments: [{ required: true }],
  };
