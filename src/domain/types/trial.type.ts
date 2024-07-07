import { BaseRecord } from '@refinedev/core';
import { TrialScopeEnum } from '../enums/trial-scope.enum';
import { TrialTypeEnum } from '../enums/trial-type.enum';

export interface TrialType extends BaseRecord {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  courtName: string;
  summary: string;
  type: TrialTypeEnum;
  scope: TrialScopeEnum;
}
