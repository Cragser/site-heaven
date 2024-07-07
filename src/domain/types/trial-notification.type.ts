import { BaseRecord } from '@refinedev/core';
import { TrialNotificationTypeEnum } from '../enums/trial-notification-type.enum';

export interface TrialNotificationType extends BaseRecord {
  id: string;
  name: string;
  type: TrialNotificationTypeEnum;
  date: string;
}
