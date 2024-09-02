"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { legalFields } from "@lib/fields/legal.fields";

interface Props {
  params: {
    personId: string;
    legalId: string;
  };
}

export default function LegalEditPage({
  params: { legalId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.legal}
      columns={legalFields}
      id={legalId}
    />
  );
}
