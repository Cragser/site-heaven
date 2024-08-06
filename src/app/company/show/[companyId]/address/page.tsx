"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";

export default function PersonList({ params: { companyId } }: any) {
  const columns = [
    "name",
    "country",
    "state",
    "city",
    "postalCode",
    "colony",
    "street",
    "exteriorNumber",
    "interiorNumber",
    "additionalInformation",
  ];

  return (
    <CreateParentEntityPage
      parentId={companyId}
      entityResource={ResourceEnum.address}
      relationResource={ResourceEnum.companyAddress}
      parentResource={ResourceEnum.company}
      parent="company"
      columns={columns.map((column) => ({
        dataIndex: [column],
      }))}
    />
  );
}
