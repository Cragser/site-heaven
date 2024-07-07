import { BaseRecord } from '@refinedev/core';

export interface PersonEducationType extends BaseRecord {
  educationId: string;
  personId: string;
}
