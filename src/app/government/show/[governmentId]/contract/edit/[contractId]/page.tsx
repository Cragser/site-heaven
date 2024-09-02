"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { contractFields } from "@lib/fields/contract/contract.fields";

interface Props {
  params: {
    personId: string;
    contractId: string;
  };
}

export default function ContractEditPage({
  params: { contractId },
}: Readonly<Props>) {
  console.log({ contractId });
  return (
    <EditFormPage
      entityResource={ResourceEnum.contract}
      columns={contractFields}
      id={contractId}
    />
  );
}
