import { BaseRecord } from '@refinedev/core';

export interface PersonLegalType extends BaseRecord {
  legalId: string;
  personId: string;
}
