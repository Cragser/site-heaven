"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { CompanyPageType } from "@page/types/company-and-child-page.type";

export default function PersonList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const columns = ["name", "date", "description", "type"];

  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.asset}
      relationResource={ResourceEnum.companyAsset}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={columns.map((column) => ({
        dataIndex: [column],
      }))}
    />
  );
}
