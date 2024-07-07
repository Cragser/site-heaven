import { BaseRecord } from '@refinedev/core';

export interface CompanyType extends BaseRecord {
  id: string;
  name: string;
  // TODO: DElete
  creationUbication: string;
  rfc: string;
  goal: string;
  nickname: string;
}
