import { z, ZodType } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { PersonEducationType } from '../types/person-education.type';

export const personEducationSchema: ZodType<Omit<PersonEducationType, 'id'>> =
  z.object({
    educationId: z.string(),
    personId: z.string(),
  });

export const personEducationSchemaExtended = extendApi(personEducationSchema, {
  description: 'TODO: Add description',
  title: ' Education Schema',
});
