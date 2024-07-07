import { z, ZodType } from 'zod';

import { extendApi } from '@anatine/zod-openapi';
import { PersonAddressType } from '../types/person-address.type';

export const personAddressSchema: ZodType<Omit<PersonAddressType, 'id'>> =
  z.object({
    addressId: z.string(),
    personId: z.string(),
  });

export const personAddressSchemaExtended = extendApi(personAddressSchema, {
  description: 'TODO: Add description',
  title: ' Address Schema',
});
