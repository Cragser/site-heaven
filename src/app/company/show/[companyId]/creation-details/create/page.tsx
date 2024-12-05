"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { companyCreationDetailsFields } from "@lib/fields/company/company-creation-details.fields";
import { CreateForm } from "@/lib/pages/create/create-form";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  return (
    <CreateForm
      parentId={companyId}
      entityResource={ResourceEnum.companyCreationDetails}
      columns={companyCreationDetailsFields}
      meta={{
        companyId: companyId,
      }}
    />
  );
}
