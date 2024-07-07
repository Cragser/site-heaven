import { BaseRecord } from '@refinedev/core';

export interface PersonCompanyType extends BaseRecord {
  companyId: string;
  personId: string;
}
