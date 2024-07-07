import { PersonRelationEnum } from '../enums/person-relation.enum';
import { BaseRecord } from '@refinedev/core';

export interface PersonRelationType extends BaseRecord {
  relatedPersonId: string;
  personId: string;
  relation: PersonRelationEnum;
  startDate?: string;
  endDate?: string;
}
