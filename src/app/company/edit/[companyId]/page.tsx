"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { companyFields } from "@lib/fields/company/company.fields";

interface CompanyPage {
  params: {
    companyId: string;
  };
}

export default function PersonEditPage({
  params: { companyId },
}: Readonly<CompanyPage>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.company}
      columns={companyFields}
      id={companyId}
    />
  );
}
