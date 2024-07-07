import { BaseRecord } from '@refinedev/core';

export interface CompanySocialType extends BaseRecord {
  socialId: string;
  companyId: string;
}
