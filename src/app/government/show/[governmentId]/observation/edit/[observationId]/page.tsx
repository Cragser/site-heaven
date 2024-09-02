"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { observationFields } from "@lib/fields/observation.fields";

interface Props {
  params: {
    observationId: string;
  };
}

export default function ContractEditPage({
  params: { observationId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.observation}
      columns={observationFields}
      id={observationId}
    />
  );
}
