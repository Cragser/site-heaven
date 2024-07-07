import { z, ZodType } from 'zod';
import { CompanySocialType } from '../types/company-social.type';
import { extendApi } from '@anatine/zod-openapi';

export const companySocialSchema: ZodType<Omit<CompanySocialType, 'id'>> =
  z.object({
    companyId: z.string(),
    socialId: z.string(),
  });

export const companySocialSchemaExtended = extendApi(companySocialSchema, {
  description: 'TODO: Add description',
  title: ' CompanySocial Schema',
});
