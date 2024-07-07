import { z, ZodType } from 'zod';
import { CareerType } from '../types/career.type';
import { extendApi } from '@anatine/zod-openapi';
import { dateValidation } from './util/date.validation';
import { Rule } from '../types/@antd/rules.types';
import { DateRegex } from '../regex/date.regex';

export const careerSchema: ZodType<Omit<CareerType, 'id'>> = z.object({
  companyId: z.string(),
  contractType: z.string(),
  role: z.string().refine((value) => value.length > 3, {
    message: 'Role debve de tener más de tres carácteres',
  }),
  ...{
    endDate: dateValidation.optional(),
    startDate: dateValidation.optional(),
  },
});

export const careerSchemaExtended = extendApi(careerSchema, {
  description: 'TODO: Add description',
  title: ' Career Schema',
});

export const careerAntdValidation: Record<
  keyof Omit<CareerType, 'id'>,
  Rule[]
> = {
  companyId: [],
  contractType: [{ required: true }],
  role: [{ required: true }],
  ...{
    endDate: [{ pattern: DateRegex }],
    startDate: [{ pattern: DateRegex }],
  },
};
