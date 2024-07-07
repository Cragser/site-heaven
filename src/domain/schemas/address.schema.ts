import { z, ZodType } from 'zod';
import { AddressType } from '../types/address.type';
import { extendApi } from '@anatine/zod-openapi';
import { Rule } from '../types/@antd/rules.types';

export const addressSchema: ZodType<Omit<AddressType, 'id'>> = z.object({
  additionalInformation: z.string(),
  city: z.string(),
  colony: z.string(),
  country: z.string(),
  exteriorNumber: z.string(),
  id: z.string(),
  interiorNumber: z.string(),
  name: z.string(),
  postalCode: z.string(),
  state: z.string(),
  street: z.string(),
});

export const addressSchemaExtended = extendApi(addressSchema, {
  description: 'TODO: Add description',
  title: ' Address Schema',
});

export const addressAntdValidation: Record<
  keyof Omit<AddressType, 'id'>,
  Rule[]
> = {
  additionalInformation: [{ required: true }],
  city: [{ required: true }],

  colony: [{ required: true }],

  country: [{ required: true }],

  exteriorNumber: [{ required: true }],

  id: [{ required: true }],

  interiorNumber: [{ required: true }],

  name: [{ required: true }],

  postalCode: [{ required: true }],

  state: [{ required: true }],

  street: [{ required: true }],
};
