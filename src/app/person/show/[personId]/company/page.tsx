"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { companyFields } from "@lib/fields/company/company.fields";

export default function PersonCompanyList({
  params: { personId },
}: Readonly<PersonPageType>) {
  return (
    <ListParentRelationPage
      columns={companyFields}
      entityResource={ResourceEnum.company}
      parent={"person"}
      parentId={personId}
      parentResource={ResourceEnum.person}
      relationResource={ResourceEnum.personCompany}
    />
  );
}
