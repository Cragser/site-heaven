import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';
import { TrialType } from '../types/trial.type';
import { TrialScopeEnum } from '../enums/trial-scope.enum';
import { TrialTypeEnum } from '../enums/trial-type.enum';

export const trialSchema: ZodType<Omit<TrialType, 'id'>> = z.object({
  courtName: z.string(),
  endDate: z.string(),
  id: z.string(),
  name: z.string(),
  scope: z.nativeEnum(TrialScopeEnum),
  startDate: z.string(),
  summary: z.string(),
  type: z.nativeEnum(TrialTypeEnum),
});

export const trialSchemaExtended = extendApi(trialSchema, {
  description: 'TODO: Add description',
  title: ' Trial Schema',
});

export const trialAntdValidation: Record<keyof Omit<TrialType, 'id'>, Rule[]> =
  {
    courtName: [{ required: true }],
    endDate: [{ required: true }],
    id: [{ required: true }],
    name: [{ required: true }],
    scope: [{ required: true }],
    startDate: [{ required: true }],
    summary: [{ required: true }],
    type: [{ required: true }],
  };
