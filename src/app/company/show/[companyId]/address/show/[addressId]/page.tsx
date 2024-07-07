'use client';

import { Show } from '@refinedev/antd';
import { useShow } from '@refinedev/core';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { AddressType } from '@lib/types/address.type';
import AddressView from '@modules/views/address-view';
import { useCompanyTitle } from '@client/hooks/titles/use-company-title';
import { LangTag } from '@lib/enums/language.enum';

interface Props {
  params: {
    addressId: string;
    companyId: string;
  };
}

export default function AddressShowPage({
  params: { addressId, companyId },
}: Readonly<Props>) {
  const { title } = useCompanyTitle(
    companyId,
    LangTag['company-address.titles.show']
  );
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
