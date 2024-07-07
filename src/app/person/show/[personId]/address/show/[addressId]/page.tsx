'use client';

import { Show } from '@refinedev/antd';
import { useShow } from '@refinedev/core';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { AddressType } from '@lib/types/address.type';
import AddressView from '@modules/views/address-view';

interface Props {
  params: {
    addressId: string;
  };
}

export default function AddressShowPage({
  params: { addressId },
}: Readonly<Props>) {
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
    <Show isLoading={isLoading}>
      <AddressView record={record} />
    </Show>
  );
}
