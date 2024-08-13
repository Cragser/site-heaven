"use client";

import { Show } from "@refinedev/antd";
import { HttpError, useShow } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AddressType } from "@lib/types/address.type";
import AddressView from "@modules/views/address-view";
import { useCompanyTitle } from "@client/hooks/titles/use-company-title";

interface Props {
  params: {
    addressId: string;
    companyId: string;
  };
}

export default function AddressShowPage({
  params: { addressId, companyId },
}: Readonly<Props>) {
  const { title } = useCompanyTitle(companyId, "company-address.titles.show");
  const { queryResult } = useShow<AddressType, HttpError>({
    id: addressId,
    resource: ResourceEnum.address,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;

  if (isError || !record) {
    return null;
  }

  return (
    <Show title={title} isLoading={isLoading}>
      <AddressView record={record} />
    </Show>
  );
}
