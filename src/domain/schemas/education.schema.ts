import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { EducationType } from '../types/education.type';
import { Rule } from '../types/@antd/rules.types';

export const educationSchema: ZodType<Omit<EducationType, 'id'>> = z.object({
  id: z.string(),
  institution: z.string(),
  license: z.string(),
  name: z.string(),
  validated: z.string(),
  ...{
    endDate: z.date(),
    initialDate: z.date(),
  },
});

export const educationSchemaExtended = extendApi(educationSchema, {
  description: 'TODO: Add description',
  title: ' Education Schema',
});

export const educationAntdValidation: Record<
  keyof Omit<EducationType, 'id'>,
  Rule[]
> = {
  id: [{ required: true }],
  institution: [{ required: true }],
  license: [],
  name: [{ required: true }],
  validated: [{ required: true }],
  ...{
    endDate: [],
    initialDate: [],
  },
};
