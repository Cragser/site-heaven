"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { auditFields } from "@lib/fields/audit/audit.fields";

interface Props {
  params: {
    auditId: string;
  };
}

export default function ContractEditPage({
  params: { auditId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.audit}
      columns={auditFields}
      id={auditId}
    />
  );
}
