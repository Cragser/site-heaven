import { BaseRecord } from '@refinedev/core';
import { NationalityType } from './helper/nationality.type';

export interface PersonType extends BaseRecord {
  curp: string;
  id: string;
  lastName: string;
  name: string;
  nss: string;
  rfc: string;
  // UUID
  nationality: string;
}

export interface PersonResponse extends Omit<PersonType, 'nationality'> {
  nationality: NationalityType;
}
