import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { PersonSocialType } from '../types/person-social.type';

export const personSocialSchema: ZodType<Omit<PersonSocialType, 'id'>> =
  z.object({
    personId: z.string(),
    socialId: z.string(),
  });

export const personSocialSchemaExtended = extendApi(personSocialSchema, {
  description: 'TODO: Add description',
  title: ' Social Schema',
});
