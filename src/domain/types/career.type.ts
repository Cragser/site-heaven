import { BaseRecord } from '@refinedev/core';

export interface CareerType extends BaseRecord {
  id: string;
  role: string;
  startDate: string;
  endDate: string;
  contractType: string;
  companyId: string;
}
