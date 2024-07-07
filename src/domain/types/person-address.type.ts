import { BaseRecord } from '@refinedev/core';

export interface PersonAddressType extends BaseRecord {
  addressId: string;
  personId: string;
}
