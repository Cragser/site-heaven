"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import CreateRelationPage from "@/lib/pages/create/create-relation.page";
import { contractFields } from "@lib/fields/contract/contract.fields";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <CreateRelationPage
      parentId={companyId}
      parentName="company"
      parentSection="company"
      parentResource={ResourceEnum.company}
      entityResource={ResourceEnum.contract}
      relationResource={ResourceEnum.companyContract}
      fields={contractFields}
    />
  );
}
