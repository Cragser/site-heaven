import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { NationalityType } from '../../types/helper/nationality.type';
import { Rule } from '../../types/@antd/rules.types';

export const nationalitySchema: ZodType<Omit<NationalityType, 'id'>> = z.object(
  {
    language: z.string(),
    name: z.string(),
  }
);

export const nationalityHelperSchemaExtended = extendApi(nationalitySchema, {
  description: 'TODO: Add description',
  title: ' NationalityHelper Schema',
});

export const nationalityHelperAntdValidation: Record<
  keyof Omit<NationalityType, 'id'>,
  Rule[]
> = {
  id: [{ required: true }],
  language: [{ required: true }],
  name: [{ required: true }],
};
