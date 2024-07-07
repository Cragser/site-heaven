import { BaseRecord } from '@refinedev/core';

export interface PersonSocialType extends BaseRecord {
  socialId: string;
  personId: string;
}
