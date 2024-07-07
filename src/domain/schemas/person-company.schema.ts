import { z, ZodType } from 'zod';
import { PersonCompanyType } from '../types/person-company.type';
import { extendApi } from '@anatine/zod-openapi';

export const personCompanySchema: ZodType<Omit<PersonCompanyType, 'id'>> =
  z.object({
    companyId: z.string(),
    personId: z.string(),
  });

export const personCompanySchemaExtended = extendApi(personCompanySchema, {
  description: 'TODO: Add description',
  title: ' PersonCompany Schema',
});
