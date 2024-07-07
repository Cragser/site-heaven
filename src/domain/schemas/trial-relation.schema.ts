import { z, ZodType } from 'zod';
import { TrialRelationType } from '../types/trial-relation.type';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';

export const trialRelationSchema: ZodType<Omit<TrialRelationType, 'id'>> =
  z.object({
    id: z.string(),

    relatedTrialId: z.string(),

    relation: z.string(),

    trialId: z.string(),
  });

export const trialRelationSchemaExtended = extendApi(trialRelationSchema, {
  description: 'TODO: Add description',
  title: ' TrialRelation Schema',
});

export const trialRelationAntdValidation: Record<
  keyof Omit<TrialRelationType, 'id'>,
  Rule[]
> = {
  id: [{ required: true }],

  relatedTrialId: [{ required: true }],

  relation: [{ required: true }],

  trialId: [{ required: true }],
};
