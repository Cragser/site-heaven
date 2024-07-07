import { BaseRecord } from '@refinedev/core';

export interface CompanyAddressType extends BaseRecord {
  addressId: string;
  companyId: string;
}
