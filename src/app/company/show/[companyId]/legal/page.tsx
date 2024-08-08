"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { legalFields } from "@lib/fields/legal.fields";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.legal}
      relationResource={ResourceEnum.companyLegal}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={legalFields.map((column) => ({
        dataIndex: [column],
      }))}
    />
  );
}
