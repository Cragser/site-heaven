import { BaseRecord } from '@refinedev/core';

export interface TrialRelationType extends BaseRecord {
  id: string;
  trialId: string;
  relatedTrialId: string;
  relation: string;
}
