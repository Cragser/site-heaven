"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { contractFields } from "@lib/fields/contract/contract.fields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.companyContract}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={contractFields}
    />
  );
}
