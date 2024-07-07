import { BaseRecord } from '@refinedev/core';

export interface JudicialProcessType extends BaseRecord {
  id: string;
  name: string;
  comments: string;
}
