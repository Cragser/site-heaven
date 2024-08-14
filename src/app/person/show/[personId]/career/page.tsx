"use client";

import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import CreateParentEntityPage from "@modules/page/create-parent-entity.page";
import { dateRender } from "@client/util/ant/fields/dateRender";
import { tagRender } from "@client/util/ant/fields/tagRender";

export default function PersonList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <CreateParentEntityPage
      parentId={personId}
      entityResource={ResourceEnum.career}
      relationResource={ResourceEnum.personCareer}
      parentResource={ResourceEnum.person}
      parent="person"
      columns={[
        {
          key: "role",
          dataIndex: ["role"],
        },
        {
          key: "company.name",
          dataIndex: ["company", "name"],
        },
        {
          key: "startDate",
          dataIndex: ["startDate"],
          render: dateRender,
        },
        {
          key: "endDate",
          dataIndex: ["endDate"],
          render: dateRender,
        },
        {
          key: "contractType",
          dataIndex: ["contractType"],
          render: tagRender,
        },
      ]}
    />
  );
}
