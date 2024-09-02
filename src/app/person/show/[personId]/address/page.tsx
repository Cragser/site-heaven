"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { addressFields } from "@lib/fields/address/address.fields";

export default function PersonAddressList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <ListParentRelationPage
      columns={addressFields}
      entityResource={ResourceEnum.address}
      parent={"person"}
      parentId={personId}
      parentResource={ResourceEnum.person}
      relationResource={ResourceEnum.personAddress}
    />
  );
}
