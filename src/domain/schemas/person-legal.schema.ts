import { z, ZodType } from 'zod';
// import { PersonLegalType } from '@lib/types/legal.type';
import { extendApi } from '@anatine/zod-openapi';
import { PersonLegalType } from '../types/person-legal.type';

export const personLegalSchema: ZodType<Omit<PersonLegalType, 'id'>> = z.object(
  {
    legalId: z.string(),
    personId: z.string(),
  }
);

export const personLegalSchemaExtended = extendApi(personLegalSchema, {
  description: 'TODO: Add description',
  title: ' Legal Schema',
});
