"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CreateForm } from "@/lib/pages/create/create-form";
import { companyFields } from "@lib/fields/company/company.fields";

export default function Page() {
  return (
    <>
      <CreateForm
        columns={companyFields}
        entityResource={ResourceEnum.company}
      />
    </>
  );
}
