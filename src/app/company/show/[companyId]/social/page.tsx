"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import ListParentRelationPage from "@/lib/pages/list/list-parent-relation.page";
import { socialFields } from "@lib/fields/social/social.fields";

export default function CompanySocialList({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <>
      <ListParentRelationPage
        parentId={companyId}
        entityResource={ResourceEnum.social}
        relationResource={ResourceEnum.companySocial}
        parentResource={ResourceEnum.company}
        parent="company"
        columns={socialFields}
      />
    </>
  );
}
