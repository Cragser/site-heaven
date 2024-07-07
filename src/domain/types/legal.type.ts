import { BaseRecord } from '@refinedev/core';

export interface LegalType extends BaseRecord {
  id: string;
  name: string;
  comments: string;
}
