"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@/lib/pages/edit/edit-form";
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
    <EditForm
      entityResource={ResourceEnum.audit}
      columns={auditFields}
      id={auditId}
    />
  );
}
