import { z, ZodType } from 'zod';
import { CompanyAddressType } from '../types/company-address.type';
import { extendApi } from '@anatine/zod-openapi';

export const companyAddressSchema: ZodType<Omit<CompanyAddressType, 'id'>> =
  z.object({
    addressId: z.string(),
    companyId: z.string(),
  });

export const companyAddressSchemaExtended = extendApi(companyAddressSchema, {
  description: 'TODO: Add description',
  title: ' CompanyAddress Schema',
});
