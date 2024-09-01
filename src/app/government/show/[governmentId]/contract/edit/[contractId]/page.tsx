"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@/lib/pages/edit/edit-form";
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
    <EditForm
      entityResource={ResourceEnum.contract}
      columns={contractFields}
      id={contractId}
    />
  );
}
