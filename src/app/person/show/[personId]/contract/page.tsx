"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { contractFields } from "@lib/fields/contract/contract.fields";

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.personContract}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={contractFields}
    />
  );
}
