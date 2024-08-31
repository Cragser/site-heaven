"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { addressFields } from "@lib/fields/address/address.fields";

export default function CompanyAddress({ params: { companyId } }: any) {
  return (
    <ListParentRelationPage
      parentId={companyId}
      entityResource={ResourceEnum.address}
      relationResource={ResourceEnum.companyAddress}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={addressFields}
    />
  );
}
