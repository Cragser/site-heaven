"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { companyCreationDetailsFields } from "@lib/fields/company/company-creation-details.fields";

interface Props {
  params: {
    companyId: string;
    creationDetailsId: string;
  };
}

export default function Page({
  params: { companyId, creationDetailsId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.companyCreationDetails}
      columns={companyCreationDetailsFields}
      id={creationDetailsId}
    />
  );
}
