import { BaseRecord } from '@refinedev/core';

export interface SocialType extends BaseRecord {
  id: string;
  name: string;
  type: string;
  description: string;
  link: string;
  createdAt: Date;
  estimatedPeopleImpacted: number;
}
