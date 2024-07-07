import { BaseRecord } from '@refinedev/core';

export interface EducationType extends BaseRecord {
  id: string;
  name: string;
  institution: string;
  license: string;
  validated: boolean;
  initialDate: Date;
  endDate: Date;
}
