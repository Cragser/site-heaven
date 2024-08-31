"use client";

import { CreateForm } from "@/lib/pages/create/create-form";
import { personCompanyTimeFrameFields } from "@lib/fields/person/person-company-time-frame.fields";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  params: {
    companyId: string;
    personCompanyId: string;
  };
}

export default function CompanyPersonTimeFrameCreatePage({
  params: { personCompanyId },
}: Props) {
  return (
    <CreateForm
      columns={personCompanyTimeFrameFields}
      entityResource={ResourceEnum.personCompanyTimeFrame}
      meta={{
        personCompanyId,
      }}
    />
  );
}
