"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@/lib/pages/edit/edit-form";
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
    <EditForm
      entityResource={ResourceEnum.observation}
      columns={observationFields}
      id={observationId}
    />
  );
}
