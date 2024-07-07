import { z, ZodType } from 'zod';
import { CompanyType } from '../types/company.type';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';

export const companySchema: ZodType<Omit<CompanyType, 'id'>> = z.object({
  creationUbication: z.string(),
  goal: z.string(),
  id: z.string(),
  name: z.string(),
  nickname: z.string().optional(),
  rfc: z.string(),
});

export const companySchemaExtended = extendApi(companySchema, {
  description: 'TODO: Add description',
  title: ' Company Schema',
});

export const companyAntdValidation: Record<
  keyof Omit<CompanyType, 'id'>,
  Rule[]
> = {
  creationUbication: [{ required: true }],
  goal: [{ required: true }],
  id: [{ required: true }],
  name: [{ required: true }],
  nickname: [],
  rfc: [{ required: true }],
};
