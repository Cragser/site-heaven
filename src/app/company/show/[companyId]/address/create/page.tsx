'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { CompanyPageType } from '@page/types/company-and-child-page.type';
import { AddressType } from '@lib/types/address.type';
import AddressForm from '@modules/forms/address-form';
import { useCompanyTitle } from '@client/hooks/titles/use-company-title';
import { LangTag } from '@lib/enums/language.enum';

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { title } = useCompanyTitle(
    companyId,
    LangTag['company-address.titles.create']
  );
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<AddressType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companyAddress,
        values: { addressId: id, companyId },
      });
    },
    resource: ResourceEnum.address,
  });

  return (
    <Create title={title} saveButtonProps={saveButtonProps}>
      <AddressForm {...formProps} />
    </Create>
  );
}
