import { BaseRecord } from '@refinedev/core';

export interface PersonCareerType extends BaseRecord {
  personId: string;
  careerId: string;
}
