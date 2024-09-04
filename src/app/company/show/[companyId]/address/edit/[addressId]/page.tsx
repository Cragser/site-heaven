"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { addressFields } from "@lib/fields/address/address.fields";

interface Props {
  params: {
    addressId: string;
  };
}

export default function AddressEditPage({
  params: { addressId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.address}
      columns={addressFields}
      id={addressId}
    />
  );
}
