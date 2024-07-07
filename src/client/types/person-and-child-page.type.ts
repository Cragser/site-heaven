import { PersonPageType } from '@page/types/pages/person/person-page.type';

export interface PersonAndChildPageType extends PersonPageType {
  params: {
    id: string;
    personId: string;
  };
}
