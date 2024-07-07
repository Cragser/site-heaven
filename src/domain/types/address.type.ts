import { BaseRecord } from '@refinedev/core';

export interface AddressType extends BaseRecord {
  id: string;
  name: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  colony: string;
  street: string;
  exteriorNumber: string;
  interiorNumber: string;
  additionalInformation: string;
}
