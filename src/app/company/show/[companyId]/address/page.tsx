"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { addressFields } from "@lib/fields/address/address.fields";

export default function CompanyAddress({ params: { companyId } }: any) {
  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.address}
      relationResource={ResourceEnum.companyAddress}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={addressFields}
    />
  );
}
