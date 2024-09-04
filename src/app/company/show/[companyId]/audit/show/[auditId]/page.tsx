"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { auditFields } from "@lib/fields/audit/audit.fields";

interface Props {
  params: {
    auditId: string;
  };
}

export default function Page({ params: { auditId } }: Props) {
  return (
    <ShowEntityPage
      fields={auditFields}
      resource={ResourceEnum.audit}
      id={auditId}
    />
  );
}
