"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { addressFields } from "@lib/fields/address/address.fields";

interface Props {
  params: {
    addressId: string;
  };
}

export default function AddressShowPage({
  params: { addressId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={addressFields}
      resource={ResourceEnum.address}
      id={addressId}
    />
  );
}
