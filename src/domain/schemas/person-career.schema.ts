import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { PersonCareerType } from '../types/person-career.type';

export const personCareer: ZodType<Omit<PersonCareerType, 'id'>> = z.object({
  careerId: z.string(),
  personId: z.string(),
});

export const personCareerSchemaExtended = extendApi(personCareer, {
  description: 'TODO: Add description',
  title: 'Person',
});
