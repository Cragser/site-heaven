import { BaseRecord } from '@refinedev/core';

export interface NationalityType extends BaseRecord {
  id: string;
  name: string;
  language: string;
}
